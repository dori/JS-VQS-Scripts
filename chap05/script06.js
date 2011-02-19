var bannerArray = new Array("images/redBanner.gif", "images/greenBanner.gif", "images/blueBanner.gif");

window.onload = initFrames;

function initFrames() {
	var leftWin = document.getElementById("left").contentWindow.document;

	for (var i=0; i<leftWin.links.length; i++) {
		leftWin.links[i].target = "content";
		leftWin.links[i].onclick = resetBanner;
	}
	
	setBanner();	
}

function setBanner() {
	var contentWin = document.getElementById("content").contentWindow.document;
	var randomNum = Math.floor(Math.random() * bannerArray.length);
	
	contentWin.getElementById("adBanner").src = bannerArray[randomNum];
}

function resetBanner() {
	setTimeout(setBanner,1000);
}
