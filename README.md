Homepage

![Template.html (github public version)](https://raw.githubusercontent.com/Boettner-eric/homepage/template.png)

This project is an attempt at a better desktop and mobile launch page.  It has keyboard shortcuts, nested folders, cool design and is easy to edit.

Features:
- Nightmode (small moon in bottom left)
  to edit nightmode/base colors open keys.js and edit line 27/29
  <
  27 document.documentElement.style.setProperty('--background', '#CACFD2');
  28 document.documentElement.style.setProperty('--background-alt', '#CACFD2');
  29 document.documentElement.style.setProperty('--base-txt', '#3A529B');
  >
- Fully customizable tiles and nested folders
   To edit a tile open template.html.  The main block of code should look like this:

          <a href="insert link" id="1" class="lBox">
		<div class="button">
	       	    <img src="src/ba.png" style='max-width: 40px'>
		</div>
		<h3>Back</h3>
                <p>To the Future</p>
            </a>
            
  h3 displays the website tittle, p the subtittle and "button" contains the image, just edit these and you have a new tile

  To add a folder just copy the template.html file and rename it.  In the original add a tile for your folder and in the new html file just change the url of back to "template.html" or the url of the source page.  

- Responsive design
![Responsive layout](https://Boettner-eric.github.com/homepage/responsive.png)


![My setup w/ folders and icons](https://Boettner-eric.github.com/homepage/folder.png)




All icons are from https://icons8.com [color theme]
