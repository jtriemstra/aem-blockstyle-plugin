this["CUI"]["rte"]["Templates"]["blockstyle2-pulldown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
	  this.compilerInfo = [4,'>= 1.0.0'];
	helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
	  var buffer = "", stack1, functionType="function", self=this;

	function program1(depth0,data) {
	  
	  var buffer = "", stack1, stack2;
	  buffer += "\r\n    <li><button data-action=\"blockstyle2#";
	  stack2 = ((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
	  if(stack2 || stack2 === 0) { buffer += stack2; }
	  buffer += "\"><i class=\"coral-Icon coral-Icon--sizeS\" style='float:right'></i><span style='float:left; padding-right:.625rem; width:auto;'>";
	  stack2 = ((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
	  if(stack2 || stack2 === 0) { buffer += stack2; }
	  buffer += "</span></button></li>\r\n";
	  return buffer;
	  }

	  buffer += "<ul class=\"coral-RichText-toolbar-list coral-RichText-toolbar-list--checkable\">\r\n";
	  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
	  if(stack1 || stack1 === 0) { buffer += stack1; }
	  buffer += "\r\n</ul>";
	  return buffer;
	  });