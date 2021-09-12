function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) 
	{slideIndex = 1}
	if (n < 1) 
	{slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) 
	{	slides[i].style.display = "none";}
	for (i = 0; i < dots.length; i++) 
	{dots[i].className = dots[i].className.replace(" active", "");}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
} 


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 92000); // Change image every 2 seconds
// } 
(function() {
	function Ticker( element ) {
		this.el = document.getElementById( element );
		this.init();
	}

	Ticker.prototype = {
		init: function() {
			this.items = this.el.getElementsByTagName( "li" );
			this.wrapper = document.getElementById( "ticker-wrapper-inner" );
			this.totalItems = this.items.length;
			this.timer = null;
			this.index = 0;

			this.tick();
			this.hover();

			
		},

		tick: function() {
			var self = this;
			self._setElementOffsets();

			self.timer = setInterval(function() {
				self.index++;

				if( self.index == self.totalItems ) {
					self.index = 0;
				}

				var item = self.items[self.index];
				var top = item.getAttribute( "data-top" );
				self.wrapper.style.top = "-" + top + "px";


			},12500 );
		},

		hover: function() {
			var self = this;
			var li = self.items;

			for( var i = 0; i < self.totalItems; ++i ) {
				var item = li[i];
				item.addEventListener( "mouseover", function() {
					clearInterval( self.timer );
					self.timer = null;

				}, false);
				item.addEventListener( "mouseout", function() {
					self.tick();

				}, false);
			}	
		},

		_setElementOffsets: function() {
			var self = this;
			var li = self.items;

			for( var i = 0; i < self.totalItems ; ++i ) {
				var item = li[i];
				var top = item.offsetTop;

				item.setAttribute( "data-top", top );
			}
		}
	};

	document.addEventListener( "DOMContentLoaded", function() {
		var news = new Ticker( "ticker" );

	});


})();


