(function () {
	var textBlock = document.getElementsByClassName('item-text')[0];
	var slider = document.getElementsByClassName('header-slider')[0];
	var sliderHeight = slider.offsetHeight;
	var elem = document.getElementById('header');

	if(window.onscroll) {
		console.log("scroll")
	}
	window.onscroll = function() {
		//Навігація
  		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  		if(scrolled > (sliderHeight-65)){
  			elem.className = "header scroll-header";

  		}
  		else if(scrolled < (sliderHeight-40)){
  			elem.className = "header";
  		}

  		//Паралакс
  		textBlock.setAttribute("style", "transform: translate(0%, " + -scrolled/2 +"px " + ")");
  		slider.style.backgroundPosition = "center " + -scrolled/2 + "px";

	}
})();