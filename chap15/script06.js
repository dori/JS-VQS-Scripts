window.onload = initAll;

function initAll() {
	var radioButtons = document.getElementsByTagName("input");
	
	for (var i=0; i<radioButtons.length; i++) {
		if (radioButtons[i].type == "radio") {
			radioButtons[i].onclick = chgChart;
		}
	}
	chgChart();
}

function chgChart() {
	var bChart = new Object();
	bChart.name = "Browser usage by year";
	bChart.years = new Array("1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008");
	bChart.fieldnames = new Array("Netscape","MSIE","Other");
	bChart.field1 = new Array(38.9,31.9,21.2,12.4,6.6,5.1,3,1,6,11,14);
	bChart.field2 = new Array(60.6,67.4,78.3,85.6,92.5,94.0,92,89,90,84,79);
	bChart.field3 = new Array(0.5,0.5,0.5,2.1,0.9,1.0,4,9,3,5,5);
	bChart.fields = new Array(bChart.field1,bChart.field2,bChart.field3);
	
	var jsChart = new Object();
	jsChart.name = "JavaScript usage by year";
	jsChart.years = new Array("1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008");
	jsChart.fieldnames = new Array("1.2 or later","1.0 - 1.1","No JavaScript");
	jsChart.field1 = new Array(63.4,66.5,78.4,80.2,88.1,89.1,94,89,96,95,94);
	jsChart.field2 = new Array(18.7,12.6,2.8,0.8,0.3,0.3,0,0,0,0,0);
	jsChart.field3 = new Array(17.9,21.0,18.8,19.0,11.6,10.6,4,9,3,4,5);
	jsChart.fields = new Array(jsChart.field1,jsChart.field2,jsChart.field3);
	
	var radioButtons = document.getElementsByTagName("input");
	var currDirection = getButton("direction");
	var imgSrc = "images/" + getButton("color");
	
	if (getButton("type")=="browser") {	
		var thisChart = bChart;
	}
	else {
		var thisChart = jsChart;
	}
	
	var chartBody = "<h2>"+thisChart.name+"</h2><table>";
	
	for (var i=0; i<thisChart.years.length; i++) {
		if (currDirection=="horizontal") {
			chartBody += "<tr><th rowspan='4' class='horiz'>"+thisChart.years[i];
			chartBody += "</th><td colspan='2'></td></tr>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<tr><td class='horiz'>"+thisChart.fieldnames[j];
				chartBody += "</td><td><img src='"+imgSrc+"' height='15' width='";
				chartBody += thisChart.fields[j][i]*3 + "' alt='horiz bar' />";
				chartBody += "&nbsp;&nbsp;"+thisChart.fields[j][i]+"</td></tr>";
			}
		}
		else {
			chartBody += "<tr><th rowspan='2' class='vert'>"+thisChart.years[i]+"</th>";
			for (var j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td class='vert'><img src='" + imgSrc;
				chartBody += "' alt='vert bar' hspace='10' width='15' height='";
				chartBody += thisChart.fields[j][i]*3 +"' /></td>";
			}
			chartBody += "</tr><tr>";
			for (j=0; j<thisChart.fieldnames.length; j++) {
				chartBody += "<td class='vert'>" + thisChart.fields[j][i] + "<br />";
				chartBody += thisChart.fieldnames[j] + "<br /><br /></td>";
			}
			chartBody += "</tr>";
		}
	}

	chartBody += "</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet) {
		for (var i=0; i<radioButtons.length; i++) {
			if (radioButtons[i].name == buttonSet && radioButtons[i].checked) {
				return radioButtons[i].value;
			}
		}
		return -1;
	}
}