/* 
Main JavaScript 
Used for global scripts across the site
*/
/* 
Main JavaScript 
Used for global scripts across the site
*/

/* 
Global Variable - set the variable to something you can use later.
The global variables can be used in every function below, so place them always on top. 
You can only have one variable with that name
Variables can't contain special characthers. 
*/

var app = document.getElementById("app"); // Target the HTML-tag <div id="app">
var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");
// Target HTML ID button-red
var burgerOpen = false;
var click = 0;
// Eventlistners is where you trigger something
// A list of some of the eventlistners: https://www.javatpoint.com/javascript-events
// They are used to nearly everything
// DOMContentLoaded triggers a call when the HMTL is loaded.
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  console.log(burger);
  app.classList.add("loaded"); // is animated in CSS
});

// Add an Event listner to the button-red
// This triggers on click
burger.addEventListener("click", function () {
  pizza();
  // change the color to red on click.
  // Use a function to swap between blue and red bg
  //blueRed()
});

// function
function pizza() {
  // Local variable - bgBlue, can only be used inside this function.

  if (burgerOpen === true) {
    burgerOpen = false;
    navigation.classList.remove("open");
  } else {
    burgerOpen = true;
    navigation.classList.add("open");
  }
  console.log(burgerOpen);
}
