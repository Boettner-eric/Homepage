var focused = 1;

window.onload = function(){document.getElementById(focused).focus();}; // Focus at start and when window is focused again.

window.onclick = function(e){
	if ( document.activeElement.id != "search" ) {
		document.getElementById(focused).focus();
	}
};
// **** Theme section
function dark(){ //1
  document.documentElement.style.setProperty('--background', '#000000');
  document.documentElement.style.setProperty('--background-alt', '#000000');
  document.documentElement.style.setProperty('--base-txt', '#99AAB5');
  document.documentElement.style.setProperty('--main-cl', '#D32F2F');
  document.documentElement.style.setProperty('--comp-cl', '#DD4132');
  document.documentElement.style.setProperty('--sub-txt', '#99AAB5');
}
function discord(){ // 2
  document.documentElement.style.setProperty('--background', '#23272A');
  document.documentElement.style.setProperty('--background-alt', '#23272A');
  document.documentElement.style.setProperty('--base-txt', '#99AAB5');
  document.documentElement.style.setProperty('--main-cl', '#7289DA');
  document.documentElement.style.setProperty('--comp-cl', '#99AAB5');
  document.documentElement.style.setProperty('--sub-txt', '#7289DA');
}
function light(){ // 3
  document.documentElement.style.setProperty('--background', '#D4E6F1');
  document.documentElement.style.setProperty('--background-alt', '#D4E6F1');
  document.documentElement.style.setProperty('--base-txt', '#F64C72');
  document.documentElement.style.setProperty('--main-cl', '#F64C72');
  document.documentElement.style.setProperty('--comp-cl', '#2F2FA2');
  document.documentElement.style.setProperty('--sub-txt', '#2F2FA2');
}
function gogh() { // 4
  document.documentElement.style.setProperty('--background', '#0375B4');
  document.documentElement.style.setProperty('--background-alt','#0375B4');
  document.documentElement.style.setProperty('--base-txt', '#FFFFF');
  document.documentElement.style.setProperty('--main-cl', '#FECE00');
  document.documentElement.style.setProperty('--comp-cl', '#007849');
  document.documentElement.style.setProperty('--sub-txt', '#FFFFFF');
}
function neon() { //5
  document.documentElement.style.setProperty('--background', '#0E0B16');
  document.documentElement.style.setProperty('--background-alt','#0E0B16');
  document.documentElement.style.setProperty('--base-txt', '#E7DFDD');
  document.documentElement.style.setProperty('--main-cl', '#4717F6');
  document.documentElement.style.setProperty('--comp-cl', '#A239CA');
  document.documentElement.style.setProperty('--sub-txt', '#E7DFDD');
}
function soft() { //6
  document.documentElement.style.setProperty('--background', '#6B5B95');
  document.documentElement.style.setProperty('--background-alt','#6B5B95');
  document.documentElement.style.setProperty('--base-txt', '#F0EDE5');
  document.documentElement.style.setProperty('--main-cl', '#FF383F');
  document.documentElement.style.setProperty('--comp-cl', '#223A5E');
  document.documentElement.style.setProperty('--sub-txt', '#F0EDE5');
}
function vim(){ //7
  document.documentElement.style.setProperty('--background', '#282828');
  document.documentElement.style.setProperty('--background-alt', '#282828');
  document.documentElement.style.setProperty('--base-txt', '#33FF33');
  document.documentElement.style.setProperty('--main-cl', '#282828');
  document.documentElement.style.setProperty('--comp-cl', '#33FF33');
  document.documentElement.style.setProperty('--sub-txt', '#33FF33');
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
document.getElementById("night").onclick = function(){ // Themes !!!
  switch (getComputedStyle(document.body).getPropertyValue("--background")) {
    case '#23272A':// discord -> dark
      dark();
      break;
    case '#000000': // dark -> soft
      soft();
      break;
    case '#6B5B95': // soft -> neon
      neon();
      break;
    case '0E0B16': // neon -> gogh
      gogh();
      break;
    case '#0375B4': // gogh -> vim
      vim();
      break;
    case '#282828': // vim -> light
      light();
      break;
    case '#D4E6F1': // light -> discord
      discord();
      break;
    default:
      light();
      break;
  }
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
    dark();
  } else if (key == 50) { // 1
    discord();
  } else if (key == 51) { // 2
    light();
  } else if (key == 52) { // 3
    gogh();
  } else if (key == 53) { // 4
    neon();
  } else if (key == 54) { // 5
    soft();
  } else if (key == 55) { // 6
    vim();
  } else if (key == 66) {  // b shortcut - back
			window.location.replace("index.html");
    }

	if (result) {
		document.getElementById(String(result)).focus();
	}
};
