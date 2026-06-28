// Smooth navbar shadow

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow = "none";

}

});

// Contact form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting Neo Innovatech Solutions!");

form.reset();

});