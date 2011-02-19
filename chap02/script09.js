window.onload = initAll;

function initAll() {
	document.getElementById("Lincoln").onclick = saySomething;
	document.getElementById("Kennedy").onclick = saySomething;
	document.getElementById("Nixon").onclick = saySomething;
}

function saySomething() {
	switch(this.id) {
		case "Lincoln":
			alert("Four score and seven years ago...");
			break;
		case "Kennedy":
			alert("Ask not what your country can do for you...");
			break;
		case "Nixon":
			alert("I am not a crook!");
			break;
		default:
	}
}
