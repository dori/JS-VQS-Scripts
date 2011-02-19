YAHOO.namespace("calendar");

YAHOO.calendar.init = function() {
	YAHOO.calendar.cal1 = new YAHOO.widget.Calendar("cal1Container");
	resetCal();

	document.getElementById("resetCal").onclick = resetCal;
	document.getElementById("getSelectedDate").onclick = showSelected;

	function resetCal() {
		YAHOO.calendar.cal1.cfg.setProperty("pagedate",new Date());
		YAHOO.calendar.cal1.cfg.setProperty("selected","");
		YAHOO.calendar.cal1.render();
	}
}

YAHOO.util.Event.onDOMReady(YAHOO.calendar.init);

function showSelected() {
	var dateString = "Please select a date";
	var pickedDate = YAHOO.calendar.cal1.getSelectedDates()[0];
	if (pickedDate) {
		var outDate =  YAHOO.calendar.cal1.Locale.WEEKDAYS_LONG[pickedDate.getDay()] + ", " + YAHOO.calendar.cal1.Locale.MONTHS_LONG[pickedDate.getMonth()] + " " + pickedDate.getDate() + ".";
		dateString = "We're looking forward to seeing you on " + outDate;
	}
	document.getElementById("datePicked").innerHTML = dateString;
}
