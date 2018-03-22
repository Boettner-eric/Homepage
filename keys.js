var focused = 1;

window.onload = function(){document.getElementById(focused).focus();}; // Focus at start and when window is focused again.

window.onclick = function(e){
	if ( document.activeElement.id != "search" ) {
		document.getElementById(focused).focus();
	}
};

document.getElementById("search").onblur = function(){ // Unfocusing search bar
	document.getElementById(focused).focus();
	document.getElementById("escape").style.opacity = 1;
	document.getElementById("blackout").style.opacity = 0;
	document.getElementById("blackout").style.pointerEvents = "none";
	document.getElementById("liveClock").style.color = '';
	document.getElementById("search").value = '';
};
document.getElementById("search").onfocus = function(){ // Focusing search bar
	document.getElementById("escape").style.opacity = .7;
	document.getElementById("blackout").style.opacity = .3;
	document.getElementById("blackout").style.pointerEvents = "all";
	document.getElementById("liveClock").style.color = "#60B48A";
};
document.getElementById("night").onclick = function(){ // Nightmode button
	if (getComputedStyle(document.body).getPropertyValue("--background") == "#0D080F") {
		document.documentElement.style.setProperty('--background', '#CACFD2');
		document.documentElement.style.setProperty('--background-alt', '#CACFD2');
		document.documentElement.style.setProperty('--base-txt', '#3A529B');
	} else {
		document.documentElement.style.setProperty('--background', '#0D080F');
		document.documentElement.style.setProperty('--background-alt', '#0D080F');
		document.documentElement.style.setProperty('--base-txt', '#5A555B');
	}
};

document.onkeydown = function(e) {

	var key = e.keyCode;

	if ( document.activeElement.id == "search" ) { // If search bar and key [ESC], return to tiles.
		if ( key == 27 ) {
			document.getElementById("search").value = '';
			document.activeElement.blur();
			document.getElementById(focused).focus();
		}
		return;
	}

	if (!document.activeElement.id) {
		// Keys for help and search still working even if no tile is selected, if it's another key, then select last tile.
		if ( key == 32 ) { // Key space, focus search bar and show [ESP] instruction.
			document.getElementById("search").focus();
		} else {
			document.getElementById(focused).focus();
		}
		return;
	}

		/*	Mapped keys:    [ESC]               <---- Back
		 *                        [w/^]
		 *                  [a/<] [s/v] [d/>]   <---- Movement
		 *                  [     space     ]   <---- Focus search
		 *
		 * Shortcuts:
		 		b - back
				[ add more here ]
				keycode.info is a super useful way to find keycodes for Shortcuts
				i.e. n = 78, b = 66 ...
				scroll down for key specific shortcuts
		 */


	var result = null;

	if ( key == 32 ) { // Key space, focus search bar and show [ESP] instruction.
		result = "search"
	} else if ( key == 38 || key == 87) { // Up key, go back 4 blocks (the one above).
		result = parseInt(focused) - 4;
		focused = parseInt(focused) - 4;
		if (result < 1) {
			result += 12;
			focused += 12;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 40 || key == 83) { // Down key, go forward 4 blocks (the one below).
		result = parseInt(focused) + 4;
		focused = parseInt(focused) + 4;
		if (result > 12) {
			result -= 12;
			focused -= 12;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 39 || key == 68 ) { // Right key, go forward 1 block or reset row if end.
		result = focused == 12 ? parseInt(focused) - 11 : parseInt(focused) + 1;
		focused = focused == 12 ? parseInt(focused) - 11 : parseInt(focused) + 1;
		if (result > 12) {
			result -= 12;
			focused -= 12;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	} else if ( key == 37 || key == 65 ) { // left key, go back 1 block or reset row if end.
		result = focused == 13 ? parseInt(focused) + 3 : parseInt(focused) - 1;
		focused = focused == 13 ? parseInt(focused) + 3 : parseInt(focused) - 1;
		if (result < 1) {
			result += 12;
			focused += 12;
		}
		result = !isNaN(document.activeElement.id) ? result : focused;
	}
	/* Key Specific Shortcuts
		-  add you own by adding to the if statement
		-  use filename to navigate between multiple specific template pages (i.e. folders)
	*/
	var fileName = location.href.split("/").slice(-1)
	if (fileName == "template.html"){
			if (key == 78) { // n key shortcut - example
				window.location.replace("network.html"); // sub in any link to a local html file or remote website
	} else {
		if (key == 66) {  // b shortcut - back
			window.location.replace("template.html");
	}
	}
	}
	if (result) {
		document.getElementById(String(result)).focus();
	}
};
