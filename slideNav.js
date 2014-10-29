/* Slide Navigation
** AJ Farkas 2014
** go, use, enjoy.
*/

window.onload= function(){

	var header = document.getElementsByTagName('header')[0],
			nav = document.getElementsByTagName('nav')[0],
			navHeight = nav.offsetHeight,
			limit = header.scrollTop + header.scrollHeight,
			navBottom = limit + navHeight;

	scrollInterval = setInterval(slideNav, 10); /*for page speed*/

	function slideNav(){
		if (window.pageYOffset > limit){
			nav.style.visibility = 'visible';
			nav.style.top = -(navHeight);
			if (window.pageYOffset < navBottom){
	  		nav.style.top = window.pageYOffset - navBottom + 'px';
	  	} else{ nav.style.top = 0; }	
	  } 
	  else{
	  	nav.style.visibility = 'hidden';
	  }
	}

};
