(function () {
	var elem = document.getElementById('header');
	window.onscroll = function() {
  		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		if(scrolled > 500){
  			elem.className = "header scroll-header";
  		}
  		else {
  			elem.className = "header";
  		}
  		var e = document.getElementsByClassName('item-text')[0];
  		e.setAttribute("style", "transform: translate(0%, " + -scrolled/2 +"px " + ")");
	}
})();