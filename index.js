webix.debug({events:true});
webix.protoUI(
  {
    name: "bobButton",
    $cssName: "mybutton",   
    $css: "default",
    defaults: {
      //value: "OFF",
      // css: "default",
      state: "off",
      states: { off: "Off", sortAsc:"SortAsc", sortDesc:"SortDesc" }
    },
    $init: function (config) {
      this.config.value = this.config.state;
      this.attachEvent("onItemClick", function (id) {
        this.$view.className = "btn_desc";
        this.config.state = this.config.states.sortAsc;
        console.log(this.config.state);
        this.config.value = this.config.state;
        //webix.html.addCss(this.$view, "btn_class")
        // this.attachEvent("onStateChange", function() {
        //   // console.log(this.state);
        // });

        this.refresh();
        
      });
      const trigger = this.callEvent("myEvent", [this.config.state]);
      console.log(trigger);
  
    },
    triger: function() {
      if(trigger) {
          
        this.attachEvent("onItemClick", function (id) {
          this.$view.className = "btn_class";
          this.config.state = this.config.states.sortDesc;
          console.log(this.config.state);
          this.config.value = this.config.state;
  
          this.refresh();
        });
      }
    },
  },
  webix.ui.button
);

webix.ui({
  rows: [
    {
      view: "bobButton",
      // value: "add",
      //css: "webix_primary",
      // states: ["Off", "SortAsc", "SortDesc"],
      // state: "Off",
    },
    {
      view: "list",
      id: "mylist",
      select: true,
      template: "#title#, #year#, #rank#",
      url: "data.js",
    },
  ],
});
