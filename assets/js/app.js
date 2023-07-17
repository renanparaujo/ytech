// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var inputEmail = document.getElementById("email");
var inputName = document.getElementById("name");
var buttonSend = document.getElementById("send");
var divResponse = document.getElementById("response");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkEmail(email) {
  if (!email) {
    divResponse.innerHTML = "";
    inputName.disabled = true;
    return;
  }

  var validEmail = validateEmail(email);
  if (validEmail) {
    divResponse.innerHTML = "";
    inputName.disabled = false;
  }
  else {
    divResponse.innerHTML = "Sorry, invalid email.";
    inputName.disabled = true;
  }
}

inputEmail.addEventListener("change", (e) => checkEmail(e.target.value));
inputEmail.addEventListener("blur", (e) => checkEmail(e.target.value));

buttonSend.addEventListener("click", function () {
  if (inputEmail.value == "") {
    divResponse.innerHTML = "Sorry, email is required.";
    return;
  }

  if (inputName.value == "") {
    divResponse.innerHTML = "Sorry, name is required.";
    return;
  }

  var validEmail = validateEmail(inputEmail.value);
  divResponse.innerHTML = validEmail ? "Success!" : "Sorry, invalid email.";

});

// var map;
// function initMap() {
//   local = { lat: 38.730845072019044, lng: -9.148805803354104 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: local,
//     zoom: 15,
//   });
//   const marker = new google.maps.Marker({
//     position: local,
//     map: map
//   });
// }