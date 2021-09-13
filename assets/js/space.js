// Hamburger menu creation for smaller screen size
function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}


// Function to automate vertical scroll
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

