window.onload = initiFrame;

function initiFrame() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].target = "content";
		document.links[i].onclick = setiFrame;
	}
}

function setiFrame() {
	document.getElementById("content").contentWindow.document.location.href = this.href;
	return false;
}
