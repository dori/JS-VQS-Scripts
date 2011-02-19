var newWindow = null;
window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = chgWindowState;
	}
}

function windowOpen() {
	if (newWindow && !newWindow.closed) {
		return true;
	}
	return false;
}

function chgWindowState() {
	if (this.id == "closeWin") {
		if (windowOpen()) {
			newWindow.close();
		}
		else {
			alert("The window isn't open");
		}
	}
	if (this.id == "openWin") {
		if (windowOpen()) {
			alert("The window is already open!");
		}
		else {
			newWindow = window.open("","newWin","toolbar,location=yes,width=300,height=200");
		}
	}
	return false;
}
