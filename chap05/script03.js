var framesetPage = "frameset3.html";
var currPage = justTheFilename(self.location.pathname);

if (top.location == self.location && framesetPage != currPage) {
	self.location.replace(framesetPage + "?" + currPage);
}

window.onload = chgFrame;

function chgFrame() {
	if (top.location == self.location && document.location.search) {
		var linkURL = justTheFilename(document.location.search);
		var contentWin = document.getElementById("content").contentWindow;
		var currURL = justTheFilename(contentWin.location.pathname);

		if (currURL != linkURL) {
			contentWin.location.replace(linkURL);
		}
	}
}

function justTheFilename(thisFile) {
	if (thisFile.indexOf("/") > -1) {
		thisFile = thisFile.substring(thisFile.lastIndexOf("/")+1);
	}

	if (thisFile.indexOf("?") == 0) {
		thisFile = thisFile.substring(1);
	}

	return thisFile;
}
