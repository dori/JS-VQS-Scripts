YAHOO.namespace("calendar");

YAHOO.calendar.init = function() {
	var today = new Date();

	document.getElementById("selMonth1").selectedIndex = today.getMonth();
	document.getElementById("selDay1").selectedIndex = today.getDate()-1;
	document.getElementById("selMonth2").selectedIndex = today.getMonth();
	document.getElementById("selDay2").selectedIndex = today.getDate()-1;

	document.getElementById("selMonth1").onchange = function() {changeDate(1)};
	document.getElementById("selDay1").onchange = function() {changeDate(1)};
	document.getElementById("selMonth2").onchange = function() {changeDate(2)};
	document.getElementById("selDay2").onchange = function() {changeDate(2)};

	YAHOO.calendar.cal1 = new YAHOO.widget.CalendarGroup("cal1Container");
	YAHOO.calendar.cal1.cfg.setProperty("pagedate",new Date());
	YAHOO.calendar.cal1.cfg.setProperty("selected","");
	YAHOO.calendar.cal1.cfg.setProperty("title","Select your desired check-in date:");
	YAHOO.calendar.cal1.render();
	YAHOO.calendar.cal1.selectEvent.subscribe(handleSelect1, YAHOO.calendar.cal1, true);

	YAHOO.calendar.cal2 = new YAHOO.widget.CalendarGroup("cal2Container");
	YAHOO.calendar.cal2.cfg.setProperty("pagedate",new Date());
	YAHOO.calendar.cal2.cfg.setProperty("selected","");
	YAHOO.calendar.cal2.cfg.setProperty("title","Select your desired check-out date:");
	YAHOO.calendar.cal2.render();
	YAHOO.calendar.cal2.selectEvent.subscribe(handleSelect2, YAHOO.calendar.cal2, true);

	document.getElementById("dateLink1").onclick = showCalendar1;
	document.getElementById("dateLink2").onclick = showCalendar2;
}

function showCalendar1() {
	YAHOO.calendar.cal2.hide();
	YAHOO.calendar.cal1.show();
}

function showCalendar2() {
	YAHOO.calendar.cal1.hide();
	YAHOO.calendar.cal2.show();
}

function handleSelect1(type,args,obj) {
	handleSelect(args[0],1);
}

function handleSelect2(type,args,obj) {
	handleSelect(args[0],2);
}

function handleSelect(dates,calNo) {
	var date = dates[0];
	var monthString = "selMonth" + calNo;
	var dayString = "selDay" + calNo;

	document.getElementById(monthString).selectedIndex = date[1]-1;
	document.getElementById(dayString).selectedIndex = date[2]-1;

	if (calNo==1) {
		YAHOO.calendar.cal1.hide();
	}
	else {
		YAHOO.calendar.cal2.hide();
	}
}

function changeDate(calNo) {
	var today = new Date();
	var monthString = "selMonth" + calNo;
	var dayString = "selDay" + calNo;
	if (calNo==1) {
		var thisCal = YAHOO.calendar.cal1;
	}
	else {
		var thisCal = YAHOO.calendar.cal2;
	}

	var month = document.getElementById(monthString).selectedIndex;
	var day = document.getElementById(dayString).selectedIndex + 1;

	thisCal.select((month+1) + "/" + day + "/" + today.getFullYear());
	thisCal.setMonth(month);
	thisCal.render();
}

YAHOO.util.Event.onDOMReady(YAHOO.calendar.init);
