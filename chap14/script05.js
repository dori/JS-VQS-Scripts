YAHOO.namespace("container");

function init() {
	var handleSubmit = function() {
		this.hide();
	}
	var handleCancel = function() {
		this.hide();
	}

	YAHOO.container.dialog1 = new YAHOO.widget.Dialog("dlg", 
		{ width: "250px",
			fixedcenter: true,
			visible: false, 
			constraintoviewport : true,
			buttons:[ 
				{text:"Submit", handler:handleSubmit, isDefault:true}, 
				{text:"Cancel", handler:handleCancel}
			], 
			effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
		}
	);

	YAHOO.container.dialog1.render();

	document.getElementById("loadDialog").onclick = function() {
		YAHOO.container.dialog1.show();
	}
}

YAHOO.util.Event.onDOMReady(init); 
