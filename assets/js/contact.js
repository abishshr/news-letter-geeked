// Hamburger menu creation for smaller screen size

function hamburgerFunc() {
	var x = document.getElementById("nav");
	if (x.className === "nav") 
		{x.className += " responsive";} 
	else {x.className = "nav";}
}

// For Setting the Font size to small  for all the article box and slideshow text
function smallFontSize() {
    var elements_c =document.getElementsByClassName('contact')
    var elements_b =document.getElementsByClassName('btn')
  
    for(var i=0; i < elements_c.length; i++){
      var element = elements_c[i]
      element.style.padding = "small"
    for(var i=0; i < elements_b.length; i++){
      var element = elements_b[i]
      element.style.fontSize = "small"
    }
    
  }
}
  // For Setting the Font size to Large  for all the article box and slideshow text
function mediumFontSize() {
    var elements_c =document.getElementsByClassName('contact')
    var elements_b =document.getElementsByClassName('btn')
  
    for(var i=0; i < elements_c.length; i++){
      var element = elements_c[i]
      element.style.padding = "medium"
    }
    for(var i=0; i < elements_b.length; i++){
      var element = elements_b[i]
      element.style.fontSize = "medium"
    }
    
  }
  // For Setting the Font size to Large  for all the article box and slideshow text
function largeFontSize() {
    var elements_c =document.getElementsByClassName('contact')
    var elements_b =document.getElementsByClassName('btn')
  
    for(var i=0; i < elements_c.length; i++){
      var element = elements_c[i]
      element.style.padding = "x-large"
    }
    for(var i=0; i < elements_b.length; i++){
      var element = elements_b[i]
      element.style.fontSize = "x-large"
    }
    
  }

// Validate Method for form submission 
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
var text;
// Check length of name if less than 5 throw error
if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
}
// Check length of subject if less than 10 throw error
if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
}
// Check length of Phone  if not equal to  10 throw error
if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
}

// Check length position of @ or  see the length if less than 6 then throw error
if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
}
// Check message length if less than 140 throw error
if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
}
alert("Form Submitted Successfully!");
return true;
}