(function () {
    "use strict";
    
    var Class = window.Class,
    	CUI = window.CUI,
    	FEATURE_ID = "blockstyle",
    	//TODO: figure out how these are different
    	FEATURE_CONFIG_ID = "blockstyle",
    	GROUP = "test-projects",
    	TAG_KEY = "tag",
    	DESCRIPTION_KEY = "description",
    	STYLE_KEY = "classes",
    	BlockElementStylePlugin;
    
    BlockElementStylePlugin = new Class({
	    
		toString: "BlockElementStylePlugin",
	
	    extend: CUI.rte.plugins.ParagraphFormatPlugin,
	
	    pickerUI: null,
	
	    getFeatures: function () {
	        return [ FEATURE_ID ];
	    },
	
	    initializeUI: function (tbGenerator) {
	    	var plg = CUI.rte.plugins;
	
	        if (!this.isFeatureEnabled(FEATURE_ID)) {
	            return;
	        }
	        
	        var config = this.config[FEATURE_CONFIG_ID];
	        
	        /*this.pickerUI = tbGenerator.createParaFormatter(GROUP + "#" + FEATURE_ID, this, null,
                    this.getFormats());
	        console.log("picker ui is");
	        console.log(this.pickerUI);
            /*tbGenerator.addElement(GROUP, plg.Plugin.SORT_PARAFORMAT, this.formatUI,
                    10);*/
	        
	        this.pickerUI = tbGenerator.createElement(FEATURE_ID,
	                                        this, true, config.tooltip || "Apply Block and Style");
	
	        console.log(this.pickerUI);
	        
	        //TODO: research what this does
	        //NOTE: 3rd param must be "this.___"
	        tbGenerator.addElement(GROUP, plg.Plugin.SORT_FORMAT, this.pickerUI, 120);
	        //TODO: new icon
	        tbGenerator.registerIcon(GROUP + "#" + FEATURE_ID, "coral-Icon coral-Icon--tableEdit");
	    },

	    getFormats: function() {
	    	console.log("get formats");	    	
	        var com = CUI.rte.Common;
	        if (this.cachedFormats == null) {
	            this.cachedFormats = this.config[FEATURE_CONFIG_ID].formats || { };
	            //TODO: research what this does
	            com.removeJcrData(this.cachedFormats);
	            this.cachedFormats = com.toArray(this.cachedFormats, TAG_KEY, DESCRIPTION_KEY);
	        }
	        console.log(this.cachedFormats);
	        return this.cachedFormats;
	    },

	    setFormats: function(formats) {
	        this.cachedFormats = formats;
	    },

	    hasFormatsConfigured: function() {
	        return !!this.config[FEATURE_CONFIG_ID].formats;
	    },
	    
	    getFormatById: function(formats, id) {
	        var formatCnt = formats.length;
	        for (var f = 0; f < formatCnt; f++) {
	            if (formats[f].tag == id) {
	                return formats[f];
	            }
	        }
	        return null;
	    },
	    
	    notifyPluginConfig: function(pluginConfig) {
	    	console.log("notifyPluginConfig");
	    	
	        pluginConfig = pluginConfig || { };
	        
	        this.config = pluginConfig;
	    },
	    
	    execute: function (id) {
	    	console.log("blockStyle execute");
	    },
	
	    //to mark the icon selected/deselected
	    updateState: function (selDef) {
	    	console.log("blockStyle updateState");
	        var hasUC = this.editorKernel.queryState(FEATURE_ID, selDef);
	
	        if (this.pickerUI !== null) {
	            this.pickerUI.setSelected(hasUC);
	        }
	    }
	});
	
	//CUI.rte.plugins.PluginRegistry.register(GROUP, BlockElementStylePlugin);
})();

this["CUI"]["rte"]["Templates"]["blockstyle-pulldown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, functionType="function", self=this;

	function program1(depth0,data) {
	  
	  var buffer = "", stack1, stack2;
	  buffer += "\r\n    <li><button data-action=\"blockstyle#";
	  stack2 = ((stack1 = (depth0 && depth0.tag)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
	  if(stack2 || stack2 === 0) { buffer += stack2; }
	  buffer += "\"><i class=\"coral-Icon coral-Icon--sizeS\"></i>";
	  stack2 = ((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
	  if(stack2 || stack2 === 0) { buffer += stack2; }
	  buffer += "</button></li>\r\n";
	  return buffer;
	  }

	  buffer += "<ul class=\"coral-RichText-toolbar-list coral-RichText-toolbar-list--checkable\">\r\n";
	  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\r\n</ul>";
	  return buffer;
	  });