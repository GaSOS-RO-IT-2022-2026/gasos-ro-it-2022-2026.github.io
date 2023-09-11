// === PLEASE README === (jmpreadme)
/*
This code is separated by tytles (=== <Section Name> === (jmp<quickjump name>))

You can use Ctrl + F to quiclky jump to specific sections

== SECTIONS ==:
1. Please README - jmpreadme
1. Main Logo animation - jmpmainlogo
1. Mobile Menu Generator - jmpmobilemenu

*/

// === Main Logo animation === (jmpmainlogo)

/*note from Jan Palma (Mobilex1122)
I recommend to not touch this.

But if you want I recommend reading animeJS doc. (Mainly info about timeline function)

https://animejs.com/documentation/
*/
const animspeed = 600;

var tl = anime.timeline({
  easing: "easeOutQuint",
  duration: animspeed * 5,
});

tl.add({
  targets: ".mainlogo-i",
  scaleY: [
    { value: 0, duration: 0 },
    { value: 1, duration: animspeed, delay: animspeed },
  ],
});

tl.add(
  {
    targets: ".mainlogo-i-dot",
    scaleY: [
      { value: 0, duration: 0, easing: "easeOutQuart" },
      { value: 1, duration: animspeed, delay: animspeed },
    ],
  },
  animspeed * 1
);

tl.add(
  {
    targets: ".mainlogo-t",
    scaleY: [
      { value: 0, duration: 0, easing: "easeOutQuart" },
      { value: 1, duration: animspeed, delay: animspeed },
    ],
  },
  animspeed * 0.4
);

tl.add(
  {
    targets: ".mainlogo-t-line",
    scaleX: [
      { value: 0, duration: 0, easing: "easeOutQuart" },
      { value: 1, duration: animspeed, delay: animspeed },
    ],
  },
  animspeed * 1.2
);

tl.add(
  {
    targets: ".mainlogo-text",
    width: [
      { value: 0, duration: 0 },
      { value: "40rem", duration: animspeed * 1.3, delay: animspeed / 1 },
    ],
    easing: "easeInOutQuart",
    delay: function (el, i) {
      return i * 250;
    },
  },
  animspeed * 1.5
);

tl.add(
  {
    targets: ".mainlogo-svg g path",
    fill: [
      { value: "#000000", duration: 0 },
      { value: "#ffffff", duration: animspeed * 4, delay: animspeed * 2 },
    ],
    strokeDashoffset: [
      { value: anime.setDashoffset, duration: 0 },
      { value: 0, duration: animspeed * 2, delay: animspeed },
    ],
    easing: "easeOutQuart",
    duration: 1500,
    delay: function (el, i) {
      return i * 100;
    },
  },
  animspeed * 1.8
);

// === Mobile Menu Generator === (jmpmobilemenu)

const mobileMenu = document.createElement("nav"); // Create Main Node
mobileMenu.id = "nav-mobile"; // Set ID (for CSS styles)

// Menu opening functions
const openmobile = () => {
  mobileMenu.classList.add("open"); // Add "open" class (opens the menu)
};

const closemobile = () => {
  mobileMenu.classList.remove("open"); // Remove "open" class (closes the menu)
};

// Close Button
const mobileCloseButton = document.createElement("button"); // Create Button

mobileCloseButton.innerText = "CLOSE"; // Set Text to "CLOSE"
mobileCloseButton.classList.add("mobile-menu-close"); // Add CSS class "mobile-menu-close"
mobileCloseButton.addEventListener("click", closemobile); // Add OnClick event (This function runs when the button is clicked)

// Top Bar (For close button)
const mobileTop = document.createElement("div"); // Create Top penel
mobileTop.style.textAlign = "right"; // Set css style "text-align" to right

// Links container (Holds all navBar links)
const mobileLinks = document.createElement("div"); // Create Link Panel
mobileLinks.classList.add("nav-inside"); // Add CSS class "nav-inside"

// Add all together
mobileTop.appendChild(mobileCloseButton); // Add close button to top panel

const navdata = document.querySelectorAll("#nav-data a"); // Get all links from normal navbar

// Add each link to mobile menu
navdata.forEach((element) => {
  const clone = element.cloneNode(true); // Create clone (so normal links are not affected)
  clone.addEventListener("click", closemobile); // Add OnClick event (Closes menu on click)
  mobileLinks.appendChild(clone); // Add Link to links panel
});

mobileMenu.appendChild(mobileTop); // Add Top Panel to mobile menu

mobileMenu.appendChild(mobileLinks); // Add Link Panel to mobile menu

document.body.appendChild(mobileMenu); // Add mobile menu to web
