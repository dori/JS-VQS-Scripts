window.onload  = initDate;

function initDate() {
	var now = new Date();

	if (now.getDay() > 0 && now.getDay() < 6) {
		var dtString = "Sorry, it's a weekday.";
	}
	else {
		var dtString = "Hooray, it's a weekend!";
	}
	
	document.getElementById("dtField").innerHTML = dtString;
}
