window.onload = initAdvert;

function initAdvert() {
	document.getElementById("annoyingAdvert").style.display = "block";
	document.getElementById("closeBox").onclick = function() {
		document.getElementById("annoyingAdvert").style.display = "none";	
	}
}
