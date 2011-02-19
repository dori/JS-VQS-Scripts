var pageCount = new Array(0,0,0,0);

window.onload = initFrames;

function initFrames() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	pageCount[this.thisPage]++;

	var newText = "<h1>You are now looking at page " + this.thisPage;
	newText += ".<br \/>You have been to this page ";
	newText += pageCount[this.thisPage] + " times.<\/h1>";

	var contentWin = document.getElementById("content").contentWindow.document;
	contentWin.body.innerHTML = newText;
	return false;
}
