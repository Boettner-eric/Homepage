# Homepage

## [Hosted on Gitub.io](https://boettner-eric.github.io/Homepage/)
![Template.html (github public version)](template.png)

This project is an attempt at a better desktop and mobile launch page.  It has keyboard shortcuts, nested folders, cool design and is super easy to edit

# Features:
* ### Scripted page creation
 The script.py file generates html files with minimal user input
```
    git $ python3 script.py
    mode : s g (single/generate) -  g
    enter filename : sample
    number of tiles (max 12) : 3
    ---------------------
    tile : 1
    link : https://Github.com
    name : Github
    subtitle : open source
    src : gh
    ---------------------
    tile : 2
    link : https://stackoverflow.com
    name : Stack Overflow
    subtitle : Dev help
    src : st
    ---------------------
    tile : 3
    link : https://Google
    name : Google
    subtitle : search
    src : go
    ---------------------
    File Created
```
 ![sample.html](screenshots/example.png)

* ### Fully customizable tiles and nested folders
   To edit a tile open template.html.  The main block of code should look like this:
   ![back tile](screenshots/back.png)
```html
<a href="index.html" id="1" class="lBox">
	<div class="button">
	    <img src="src/ba.png" style='max-width: 50px'>
	</div>
	<h3>Back</h3>
    <p>To the Future</p>
</a>
```
  - a contains the url
  - h3 contains the website title,
  ```Html
  <h3>Title</h3>
  ```
  - p contains a  subtitle
  ```Html
  <p>Subtitle</p>
  ```
  - "button" contains the image
  ```html
  <div class="button">
      <img src="src/ba.png" style='max-width: 50px'>
  </div>
  ```
  - To add a folder just add a tile for the new foldr and use script.py to generate a new file. Put the previous folder's filename in the url of the back button and you should have a functioning folder. An example folder :
![My setup w/ folders and icons](screenshots/folder.png)

* ### Nightmode
  (small moon icon in bottom left)
    to edit nightmode/base colors open keys.js and edit lines 27-29
    ```javascript
    document.documentElement.style.setProperty('--background', '#CACFD2');
    document.documentElement.style.setProperty('--background-alt', '#CACFD2');
    document.documentElement.style.setProperty('--base-txt', '#3A529B');
  ```
  ![nightmode](screenshots/nightmode.png)
* ### Responsive design
![Responsive layout](screenshots/responsive.png)


* This is a fork of - https://github.com/Capuno/Decaux - My version is very different but started from this code base

* All icons are from the - https://icons8.com color theme
