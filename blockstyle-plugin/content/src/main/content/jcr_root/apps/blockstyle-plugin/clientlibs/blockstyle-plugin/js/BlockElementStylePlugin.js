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
	
	    extend: CUI.rte.plugins.Plugin,
	
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
	        
	        this.pickerUI = tbGenerator.createElement(FEATURE_ID,
	                                        this, true, config.tooltip || "Apply Block and Style");
	
	        //TODO: research what this does
	        tbGenerator.addElement(GROUP, plg.Plugin.SORT_FORMAT, this.pickerUI, 120);
	        //TODO: new icon
	        tbGenerator.registerIcon(GROUP + "#" + FEATURE_ID, "coral-Icon coral-Icon--tableEdit");
	    },

	    /*getFormats: function() {
	        var com = CUI.rte.Common;
	        if (this.cachedFormats == null) {
	            this.cachedFormats = this.config.formats || { };
	            //TODO: research what this does
	            com.removeJcrData(this.cachedFormats);
	            this.cachedFormats = com.toArray(this.cachedFormats, TAG_KEY, DESCRIPTION_KEY);
	        }
	        return this.cachedFormats;
	    },

	    setFormats: function(formats) {
	        this.cachedFormats = formats;
	    },

	    hasFormatsConfigured: function() {
	        return !!this.config.formats;
	    },
	    
	    getFormatById: function(formats, id) {
	        var formatCnt = formats.length;
	        for (var f = 0; f < formatCnt; f++) {
	            if (formats[f].tag == id) {
	                return formats[f];
	            }
	        }
	        return null;
	    },*/
	    
	    /*notifyPluginConfig: function(pluginConfig) {
	    	console.log("notifyPluginConfig");
	    	
	        pluginConfig = pluginConfig || { };
	        
	        this.config = pluginConfig;
	    },*/
	    
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
	
	CUI.rte.plugins.PluginRegistry.register(GROUP, BlockElementStylePlugin);
})();