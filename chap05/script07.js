window.onload = initFrames;

function initFrames() {
	var leftWin = document.getElementById("left").contentWindow.document;

	for (var i=0; i<leftWin.links.length; i++) {
		leftWin.links[i].onclick = setFrames;
	}
}

function setFrames() {
	document.getElementById("left").contentWindow.document.location.href = this.id + ".html";
	document.getElementById("content").contentWindow.document.location.href = this.href;
	setTimeout(initFrames,1000);
	return false;
}
