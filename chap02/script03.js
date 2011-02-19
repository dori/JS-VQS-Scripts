/*
	This is an example of a long JavaScript comment. Note the characters at the beginning and ending of the comment.

	This script adds the words "Hello, world!" into the body area of the HTML page.
*/

window.onload = writeMessage;	// Do this when page finishes loading

function writeMessage() {
	// Here's where the actual work gets done

	document.getElementById("helloMessage").innerHTML = "Hello, world!";
}
