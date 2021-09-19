// Hamburger menu creation for smaller screen size
function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}

// For Setting the Font size to Small for all the article box and slideshow text
function smallFontSize() {
  var elements_desc =document.getElementsByClassName('card-description')
  var elements_title =document.getElementsByClassName('card-title')
  var elements_link =document.getElementsByClassName('card-link')
  var elements_text =document.getElementsByClassName('slide-text')
  var elements_btn =document.getElementsByClassName('topic-btn')
  var elements_nbt =document.getElementsByClassName('number-text')
  for(var i=0; i < elements_desc.length; i++){
    var element = elements_desc[i]
    element.style.fontSize = "small"
  }
  for(var i=0; i < elements_title.length; i++){
    var element = elements_title[i]
    element.style.fontSize = "small"
  }
  for(var i=0; i < elements_link.length; i++){
    var element = elements_link[i]
    element.style.fontSize = "small"
  }
  for(var i=0; i < elements_text.length; i++){
    var element = elements_text[i]
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
}

// For Setting the Font size to Medium for all the article box and slideshow text
function mediumFontSize() {
  var elements_desc =document.getElementsByClassName('card-description')
  var elements_title =document.getElementsByClassName('card-title')
  var elements_link =document.getElementsByClassName('card-link')
  var elements_text =document.getElementsByClassName('slide-text')
  var elements_btn =document.getElementsByClassName('topic-btn')
  var elements_nbt =document.getElementsByClassName('number-text')
  for(var i=0; i < elements_desc.length; i++){
    var element = elements_desc[i]
    element.style.fontSize = "medium"
  }
  for(var i=0; i < elements_title.length; i++){
    var element = elements_title[i]
    element.style.fontSize = "medium"
  }
  for(var i=0; i < elements_link.length; i++){
    var element = elements_link[i]
    element.style.fontSize = "medium"
  }
  for(var i=0; i < elements_text.length; i++){
    var element = elements_text[i]
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
}

// For Setting the Font size to Large  for all the article box and slideshow text
function largeFontSize() {
  var elements_desc =document.getElementsByClassName('card-description')
  var elements_title =document.getElementsByClassName('card-title')
  var elements_link =document.getElementsByClassName('card-link')
  var elements_text =document.getElementsByClassName('slide-text')
  var elements_btn =document.getElementsByClassName('topic-btn')
  var elements_nbt =document.getElementsByClassName('number-text')
  for(var i=0; i < elements_desc.length; i++){
    var element = elements_desc[i]
    element.style.fontSize = "x-large"
  }
  for(var i=0; i < elements_title.length; i++){
    var element = elements_title[i]
    element.style.fontSize = "x-large"
  }
  for(var i=0; i < elements_link.length; i++){
    var element = elements_link[i]
    element.style.fontSize = "x-large"
  }
  for(var i=0; i < elements_text.length; i++){
    var element = elements_text[i]
    element.style.fontSize = "x-large"
  }
  for(var i=0; i < elements_btn.length; i++){
    var element = elements_btn[i]
    element.style.fontSize = "x-large"
  }
  for(var i=0; i < elements_nbt.length; i++){
    var element = elements_nbt[i]
    element.style.fontSize = "x-large"
  }
}


// Slideshow function to change  the slides every 2 sec 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 

