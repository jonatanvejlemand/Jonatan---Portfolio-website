var app = document.getElementById("app");
var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");

var burgerOpen = false;
var click = 0;

document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  console.log(burger);
  app.classList.add("loaded");
});

burger.addEventListener("click", function () {
  pizza();
});

function pizza() {
  if (burgerOpen === true) {
    burgerOpen = false;
    navigation.classList.remove("open");
  } else {
    burgerOpen = true;
    navigation.classList.add("open");
  }
  console.log(burgerOpen);
}
