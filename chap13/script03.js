window.onload = initAll;
var xhr = false;

function initAll() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		getPix();
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function getPix() {
	xhr.open("GET", "flickrfeed.xml", true);
	xhr.onreadystatechange = showPictures;
	xhr.send(null);

	setTimeout(getPix,5 * 1000);
}

function showPictures() {
	var tempText = document.createElement("div");
	var allLinks = new Array;
			
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			var allImages = xhr.responseXML.getElementsByTagName("content");

			for (var i=0; i<allImages.length; i++) {
				tempText.innerHTML = allImages[i].textContent;
				allLinks[i] = tempText.getElementsByTagName("p")[1];
			}
			
			var randomImg = Math.floor(Math.random() * allLinks.length);
			document.getElementById("pictureBar").innerHTML = allLinks[randomImg].innerHTML;
		}
		else {
			alert("There was a problem with the request " + xhr.status);
		}
	}
}
