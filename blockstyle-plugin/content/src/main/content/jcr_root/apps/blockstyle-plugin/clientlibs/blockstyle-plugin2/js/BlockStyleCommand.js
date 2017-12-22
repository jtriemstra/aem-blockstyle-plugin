CUI.rte.commands.BlockStyle = new Class({

    toString: "BlockStyle",

    extend: CUI.rte.commands.Format,

    isCommand: function(cmdStr) {
        return (cmdStr.toLowerCase() == "blockstyle");
    },

    execute: function(execDef) {
    	console.log("BlockStyleCommand execute");
    	console.log(execDef.value.classes);
        var dpr = CUI.rte.DomProcessor;
        var com = CUI.rte.Common;
        var dom;
        var selection = execDef.selection;
        var context = execDef.editContext;
        var containerList = dpr.createContainerList(context, selection);
        var classes;
        
        if (execDef.value.classes) {
        	classes = [];
        	classes["class"] = execDef.value.classes;
        }
        
        if (containerList.length == 0) {
            var nodeList = execDef.nodeList;
            if (!nodeList) {
                nodeList = dpr.createNodeList(context, selection);
            }
            var auxRoot = com.getTagInPath(context, nodeList.commonAncestor,
                    dpr.AUXILIARY_ROOT_TAGS);
            if (auxRoot) {
                dom = dpr.createNode(execDef.editContext, execDef.value.tag, classes);
                com.moveChildren(auxRoot, dom);
                auxRoot.appendChild(dom);
            }
        } else {
            dom = dpr.createNode(execDef.editContext, execDef.value.tag, classes);
            dpr.changeContainerTag(execDef.editContext, containerList, dom, true);
        }
    }
});


// register command
CUI.rte.commands.CommandRegistry.register("blockstyle", CUI.rte.commands.BlockStyle);