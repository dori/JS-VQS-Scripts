window.onload = initAdvert;

function initAdvert() {
	document.getElementById("annoyingAdvert").style.display = "block";
	document.getElementById("annoyingAdvert").onmouseover = slide;
	document.getElementById("closeBox").onclick = function() {
		document.getElementById("annoyingAdvert").style.display = "none";	
	}
}

function slide() {
	if (currPos("annoyingAdvert") < (document.body.clientWidth-150)) {
		document.getElementById("annoyingAdvert").style.left = currPos("annoyingAdvert") + 1 + "px";
		setTimeout(slide,100);
	}
	
	function currPos(elem) {
		return document.getElementById(elem).offsetLeft;
	}
}
