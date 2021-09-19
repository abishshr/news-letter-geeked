// Hamburger menu creation for smaller screen size
function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}

// Function to make font small
function smallFontSize() {
	var elements_t =document.getElementsByClassName('text')
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "small"
	}

}

// Function to make font medium
function mediumFontSize() {
	var elements_t =document.getElementsByClassName('text')
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "medium"
	}
}

// Function to make font large
function largeFontSize() {
	var elements_t =document.getElementsByClassName('text')
	for(var i=0; i < elements_t.length; i++){
		var element = elements_t[i]
		element.style.fontSize = "large"
	}
}