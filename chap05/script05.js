window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	var newText = "<h1>You are now looking at page " + this.thisPage + ".<\/h1>";
	
	var contentWin = parent.document.getElementById("content").contentWindow;
	contentWin.document.body.innerHTML = newText;
	return false;
}
