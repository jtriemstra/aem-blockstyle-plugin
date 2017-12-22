(function () {
    //NOTE: can't use strict with the "arguments" keyword below
	//"use strict";
    
    var Class = window.Class,
	BlockStylePlugin;

	BlockStylePlugin = new Class({
    
		toString: "BlockStylePlugin",
	
	    extend: CUI.rte.plugins.ParagraphFormatPlugin,
	
	    /*getFormatId: function(dom) {
	    	var x = this.inherited(arguments);
	    	if (x == null) console.log("returning null from getFormatId");
	    	return x;
	    },*/
	    
	    getFormatId: function(dom) {
	    	var tagName = dom.tagName.toLowerCase();
	        var formats = this.getRawFormats();
	        var formatCnt = formats.length;
	        var classNames = "";
	        if (dom.attributes["class"]){ 
	        	classNames = dom.attributes["class"].value;
	    	}
	        for (var f = 0; f < formatCnt; f++) {
	            var formatDef = formats[f];
	            //TODO: this currently requires the existence of a p tag w/ no classes in the RTE definition
	            if (formatDef.tag && (formatDef.tag == tagName) && (!formatDef.classes || formatDef.classes === classNames)) {
	                return formatDef.id;
	            }
	        }
	        
	        return null;
	    },
	    
	    getRawFormats: function(){
	    	var com = CUI.rte.Common;
	    	var ar = com.toArray(this.config.formats);
	    	return ar;
	    },
	    
	    getFormats: function() {
	    	var com = CUI.rte.Common;
	        if (this.cachedFormats == null) {
	            this.cachedFormats = this.config.formats || { };
	            com.removeJcrData(this.cachedFormats);
	            this.cachedFormats = com.toArray(this.cachedFormats, "id", "description");
	        }
	        
	        return this.cachedFormats;
	    },

	    getFormatById: function(formats, id) {
	        var formatCnt = formats.length;
	        for (var f = 0; f < formatCnt; f++) {
	            if (formats[f].id == id) {
	                return formats[f];
	            }
	        }
	        return null;
	    },
	    
	    /*initializeUI: function(tbGenerator) {
			console.log("BlockStylePlugin initializeUI");
	    	this.inherited(arguments);
	    	//TODO: new icon
	        tbGenerator.registerIcon("#blockstyle2", "coral-Icon coral-Icon--textParagraph");
	    },*/

	    initializeUI: function(tbGenerator) {
	        var plg = CUI.rte.plugins;
	        var ui = CUI.rte.ui;
	        if (this.isFeatureEnabled("blockstyle2")) {
	            this.formatUI = tbGenerator.createParaFormatter("blockstyle2", this, null,
	                    this.getFormats());
	            tbGenerator.addElement("blockstyle2", plg.Plugin.SORT_PARAFORMAT, this.formatUI,
	                    10);
	        }
	    	//TODO: new icon
	        tbGenerator.registerIcon("#blockstyle2", "coral-Icon coral-Icon--textParagraph");
	    },
	    
	    execute: function(cmd) {
	    	console.log("BlockStylePlugin execute");
	        if (this.formatUI) {
	            var formatId = this.formatUI.getSelectedFormat();
	            if (formatId) {
	                this.editorKernel.relayCmd("blockstyle", this.getFormatById(this.getRawFormats(),
	                        formatId));
	            }
	        }
	    }
	    
	});
	CUI.rte.plugins.PluginRegistry.register("blockstyle2", BlockStylePlugin);
})();
