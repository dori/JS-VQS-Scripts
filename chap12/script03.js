window.onload = initDate;

function initDate() {
	var now = new Date();
	document.getElementById("dtField").innerHTML = timeString(now.getHours());

	function timeString(theHour) {
		if (theHour < 5) {
			return "What are you doing up so late?";
		}
		if (theHour < 9) {
			return "Good Morning!";
		}
		if (theHour < 17) {
			return "No surfing during working hours!";
		}
		return "Good Evening!";
	}
}
