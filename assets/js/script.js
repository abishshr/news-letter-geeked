// Hamburger menu creation for smaller screen size
function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}

var containerEle = document.getElementById('container-id');
function smallFontSize() {
	txt = document.getElementById('container-id');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
}

function largeFontSize() {
	txt = document.getElementById('container-id');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
}
function normalFontSize() {
	txt = document.getElementById('container-id');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}

// Function to automate vertical scroll
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

// Vertical auto scroll function 
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

