var Dom = YAHOO.util.Dom;
var Event = YAHOO.util.Event;
var DDM = YAHOO.util.DragDropMgr;

YAHOO.DDApp = {
    init: function() {
		new YAHOO.util.DDTarget("ul1");
		for (var i=0; i<7; i++) {
			new YAHOO.DDList("li" + i);
		}
    },
};

Event.onDOMReady(YAHOO.DDApp.init, YAHOO.DDApp, true);
