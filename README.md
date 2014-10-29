slideNav.js
===========

`nav` element slides onto screen after scroll past `header`. <br/>
A short script in vanilla JS.

instructions
------------

Target navigation should be in a `nav` tag, and the first element of the page should have a `header` tag.<br/>
The navigation is hidden until the user scrolls past the bottom of the `header`, whereupon it slides into view.<br/>
And vice-versa.<br/>
<br/>
I recommend adding some CSS in order to prevent a flash of the `nav` on pageload:<br/>
````
    nav{
      visibility: hidden; 
      position: fixed; }
````
