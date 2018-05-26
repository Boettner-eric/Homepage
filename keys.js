var focused = 1; // It's global so I can save it and then use it when I quit the search bar.

window.onload = function(){
  document.getElementById(focused).focus(); // Focus at start and when window is focused again.
  var decodedCookie = decodeURIComponent(document.cookie); // Loads cookie w/ window
  var tmp = decodedCookie.split('='); // Spits into tmp = {theme,"theme"}
  // for finding the current theme name : alert(tmp[1]);
  window[tmp[1]](); // calls the function for the "theme"
};

function setCookie(theme) {
  document.cookie = "theme=" + theme; // saves the cookie
}

window.onclick = function(e){
	if ( document.activeElement.id != "search" ) {
		document.getElementById(focused).focus();
	}
};
// **** Theme Definitions
function lava(){ //1
  document.documentElement.style.setProperty('--background', '#000000');
  document.documentElement.style.setProperty('--background-alt', '#000000');
  document.documentElement.style.setProperty('--base-txt', '#99AAB5');
  document.documentElement.style.setProperty('--main-cl', '#D32F2F');
  document.documentElement.style.setProperty('--comp-cl', '#DD4132');
  document.documentElement.style.setProperty('--sub-txt', '#99AAB5');
  setCookie("lava");
}
function discord(){ // 2
  document.documentElement.style.setProperty('--background', '#23272A');
  document.documentElement.style.setProperty('--background-alt', '#23272A');
  document.documentElement.style.setProperty('--base-txt', '#99AAB5');
  document.documentElement.style.setProperty('--main-cl', '#7289DA');
  document.documentElement.style.setProperty('--comp-cl', '#99AAB5');
  document.documentElement.style.setProperty('--sub-txt', '#7289DA');
  setCookie("discord");
}
function rwb(){ // 3 red white blue
  document.documentElement.style.setProperty('--background', '#D4E6F1');
  document.documentElement.style.setProperty('--background-alt', '#D4E6F1');
  document.documentElement.style.setProperty('--base-txt', '#F64C72');
  document.documentElement.style.setProperty('--main-cl', '#F64C72');
  document.documentElement.style.setProperty('--comp-cl', '#2F2FA2');
  document.documentElement.style.setProperty('--sub-txt', '#2F2FA2');
  setCookie("rwb");
}
function gogh() { // 4
  document.documentElement.style.setProperty('--background', '#0375B4');
  document.documentElement.style.setProperty('--background-alt','#0375B4');
  document.documentElement.style.setProperty('--base-txt', '#FFFFF');
  document.documentElement.style.setProperty('--main-cl', '#007849');
  document.documentElement.style.setProperty('--comp-cl', '#FECE00');
  document.documentElement.style.setProperty('--sub-txt', '#FFFFFF');
  setCookie("gogh");
}
function neon() { //5
  document.documentElement.style.setProperty('--background', '#0E0B16');
  document.documentElement.style.setProperty('--background-alt','#0E0B16');
  document.documentElement.style.setProperty('--base-txt', '#E7DFDD');
  document.documentElement.style.setProperty('--main-cl', '#4717F6');
  document.documentElement.style.setProperty('--comp-cl', '#A239CA');
  document.documentElement.style.setProperty('--sub-txt', '#E7DFDD');
  setCookie("neon");
}
function purple() { //6
  document.documentElement.style.setProperty('--background', '#6B5B95');
  document.documentElement.style.setProperty('--background-alt','#6B5B95');
  document.documentElement.style.setProperty('--base-txt', '#F0EDE5');
  document.documentElement.style.setProperty('--main-cl', '#FF383F');
  document.documentElement.style.setProperty('--comp-cl', '#223A5E');
  document.documentElement.style.setProperty('--sub-txt', '#F0EDE5');
  setCookie("purple");
}
function vim(){ //7
  document.documentElement.style.setProperty('--background', '#282828');
  document.documentElement.style.setProperty('--background-alt', '#282828');
  document.documentElement.style.setProperty('--base-txt', '#33FF33');
  document.documentElement.style.setProperty('--main-cl', '#282828');
  document.documentElement.style.setProperty('--comp-cl', '#33FF33');
  document.documentElement.style.setProperty('--sub-txt', '#33FF33');
  setCookie("vim");
}
// **** END theme section

document.getElementById("search").onblur = function(){ // Unfocusing search bar
	document.getElementById(focused).focus();
	document.getElementById("escape").style.opacity = 1;
	document.getElementById("blackout").style.opacity = 0;
	document.getElementById("blackout").style.pointerEvents = "none";
	document.getElementById("search").value = '';
};
document.getElementById("search").onfocus = function(){ // Focusing search bar
	document.getElementById("escape").style.opacity = .7;
	document.getElementById("blackout").style.opacity = .3;
	document.getElementById("blackout").style.pointerEvents = "all";
};
document.getElementById("gogh").onclick = function(){ // Switches themes with button press
  gogh();
};
document.getElementById("discord").onclick = function(){ // Switches themes with button press
  discord();
};
document.getElementById("vim").onclick = function(){ // Switches themes with button press
  vim();
};
document.getElementById("neon").onclick = function(){ // Switches themes with button press
  neon();
};
document.getElementById("rwb").onclick = function(){ // Switches themes with button press
  rwb();
};
document.getElementById("lava").onclick = function(){ // Switches themes with button press
  lava();
};
document.getElementById("purple").onclick = function(){ // Switches themes with button press
  purple();
};

document.onkeydown = function(e) {

	var key = e.keyCode;

	if ( document.activeElement.id == "search" ) { // If search bar and key [ESC], go back to blocks.
		if ( key == 27 ) {
			document.getElementById("search").value = '';
			document.activeElement.blur();
			document.getElementById(focused).focus();
		}
		return;
	}

	if (!document.activeElement.id) {
		// Keys for help and search still working even if no block selected, if it's another key, then select last block.
		if ( key == 32 ) { // Key space, focus search bar and show [ESP] instruction.
			document.getElementById("search").focus();
		} else {
			document.getElementById(focused).focus();
		}
		return;
	}

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
	//**** SHORTCUTS ***
  // Theme hotkeys (num row/pad)
  if (key == 49){
    lava();
  } else if (key == 50) { // 1
    discord();
  } else if (key == 51) { // 2
    rwb();
  } else if (key == 52) { // 3
    gogh();
  } else if (key == 53) { // 4
    neon();
  } else if (key == 54) { // 5
    purple();
  } else if (key == 55) { // 6
    vim();
  }
	var fileName = location.href.split("/").slice(-1)

	if (key == 66) {  // b shortcut - back
		window.location.replace("index.html");
  }

	if (result) {
		document.getElementById(String(result)).focus();
	}
};
