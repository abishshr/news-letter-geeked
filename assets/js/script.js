// Hamburger menu creation for smaller screen size
function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}

// For Setting the Font size to small for all the article box and slideshow text
function smallFontSize() {
	var elements_tt =document.getElementsByClassName('ticker-text')
	var elements_t =document.getElementsByClassName('title')
	var elements_d =document.getElementsByClassName('detail')
	var elements_st =document.getElementsByClassName('slide-text')
	var elements_btn =document.getElementsByClassName('topic-btn')
	var elements_bt =document.getElementsByClassName('button')
	var elements_nbt =document.getElementsByClassName('number-text')
	var elements_day =document.getElementsByClassName('day')
	var elements_month =document.getElementsByClassName('month')
	var elements_year =document.getElementsByClassName('year')
	for(var i=0; i < elements_tt.length; i++){
		var element = elements_tt[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_d.length; i++){
		var element = elements_d[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_st.length; i++){
		var element = elements_st[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_btn.length; i++){
		var element = elements_btn[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_nbt.length; i++){
		var element = elements_nbt[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_bt.length; i++){
		var element = elements_bt[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_day.length; i++){
		var element = elements_day[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_month.length; i++){
		var element = elements_month[i]
		element.style.fontSize = "small"
	}
	for(var i=0; i < elements_year.length; i++){
		var element = elements_year[i]
		element.style.fontSize = "small"
	}
}

// For Setting the Font size to medium for all the article box and slideshow text
function mediumFontSize() {
	var elements_tt =document.getElementsByClassName('ticker-text')
	var elements_t =document.getElementsByClassName('title')
	var elements_d =document.getElementsByClassName('detail')
	var elements_st =document.getElementsByClassName('slide-text')
	var elements_btn =document.getElementsByClassName('topic-btn')
	var elements_bt =document.getElementsByClassName('button')
	var elements_nbt =document.getElementsByClassName('number-text')
	var elements_day =document.getElementsByClassName('day')
	var elements_month =document.getElementsByClassName('month')
	var elements_year =document.getElementsByClassName('year')
	for(var i=0; i < elements_tt.length; i++){
		var element = elements_tt[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_d.length; i++){
		var element = elements_d[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_st.length; i++){
		var element = elements_st[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_btn.length; i++){
		var element = elements_btn[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_nbt.length; i++){
		var element = elements_nbt[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_bt.length; i++){
		var element = elements_bt[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_day.length; i++){
		var element = elements_day[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_month.length; i++){
		var element = elements_month[i]
		element.style.fontSize = "medium"
	}
	for(var i=0; i < elements_year.length; i++){
		var element = elements_year[i]
		element.style.fontSize = "medium"
	}
}
// For Setting the Font size to large for all the article box and slideshow text
function largeFontSize() {
	var elements_tt =document.getElementsByClassName('ticker-text')
	var elements_t =document.getElementsByClassName('title')
	var elements_d =document.getElementsByClassName('detail')
	var elements_st =document.getElementsByClassName('slide-text')
	var elements_btn =document.getElementsByClassName('topic-btn')
	var elements_bt =document.getElementsByClassName('button')
	var elements_nbt =document.getElementsByClassName('number-text')
	var elements_day =document.getElementsByClassName('day')
	var elements_month =document.getElementsByClassName('month')
	var elements_year =document.getElementsByClassName('year')
	for(var i=0; i < elements_tt.length; i++){
		var element = elements_tt[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_d.length; i++){
		var element = elements_d[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_st.length; i++){
		var element = elements_st[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_btn.length; i++){
		var element = elements_btn[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_nbt.length; i++){
		var element = elements_nbt[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_bt.length; i++){
		var element = elements_bt[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_day.length; i++){
		var element = elements_day[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_month.length; i++){
		var element = elements_month[i]
		element.style.fontSize = "large"
	}
	for(var i=0; i < elements_year.length; i++){
		var element = elements_year[i]
		element.style.fontSize = "large"
	}
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

