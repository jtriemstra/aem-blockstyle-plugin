(function () {
    //NOTE: can't use strict with the "arguments" keyword below
	//"use strict";
    
    var Class = window.Class,
    	ParagraphFormat2Plugin;
    
    ParagraphFormat2Plugin = new Class({
	    
		toString: "ParagraphFormat2Plugin",
	
	    extend: CUI.rte.plugins.ParagraphFormatPlugin,
	
	    initializeUI: function(tbGenerator) {
			console.log("ParagraphFormat2Plugin initializeUI");
	    	this.inherited(arguments);
	        tbGenerator.registerIcon("#paraformat2", "coral-Icon coral-Icon--textParagraph");
	    }
	    
	});
	CUI.rte.plugins.PluginRegistry.register("paraformat2", ParagraphFormat2Plugin);
})();

this["CUI"]["rte"]["Templates"]["paraformat2-pulldown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, functionType="function", self=this;

	function program1(depth0,data) {
	  
	  var buffer = "", stack1, stack2;
	  buffer += "\r\n    <li><button data-action=\"paraformat2#";
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