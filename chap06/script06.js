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
		return false;
	}
	
	var topPos = 0;
	var leftPos = 0;

	if (this.id.indexOf("bottom") > -1) {
		topPos = screen.availHeight-200;
	}
	if (this.id.indexOf("Right") > -1) {
		leftPos = screen.availWidth-300;
	}

	if (windowOpen()) {
		newWindow.moveTo(leftPos,topPos);
	}
	else {
		newWindow = window.open("","newWin","toolbar,location=yes,width=300,height=200,left="+leftPos+",top="+topPos);
	}
	return false;
}
