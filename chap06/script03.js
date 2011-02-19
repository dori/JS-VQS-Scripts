window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindows;
		}
	}
}

function newWindows() {
	for (var i=1; i<5;i++) {
		var imgName = "images/pixel" + i + ".jpg";
		var winName = "window" + i;
		var catWindow = window.open(imgName,winName,"width=350,height=260");
	}
	return false;
}
