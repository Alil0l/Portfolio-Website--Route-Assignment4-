// Declaring Variables
const navItems = document.querySelectorAll(".nav-item");
const imgPopup = document.querySelectorAll(".img-popup");
const openPopup = document.querySelector(".openpopup");
const isOpen = document.querySelector(".is-open");
// let textToggle = document.querySelector(".switch-text");
let counters = document.querySelectorAll(".counter");
let interval = 2000;
/////////////////////////////////////
// handling clicks on nav bar elemnts
const isActive = function () {
  navItems.forEach((e) => {
    e.classList.remove("active");
  });
};

navItems.forEach(function (e) {
  e.addEventListener("click", function () {
    isActive();
    this.classList.add("active");
  });
});
//////////////////////////////////////////////

// Opening & Closing popup when pressed
const showPopup = function () {
  openPopup.classList.remove("hidden");
};

openPopup.addEventListener("click", function (e) {
  if (!e.target.classList.contains("is-open")) {
    openPopup.classList.add("hidden");
  }
});

imgPopup.forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.stopPropagation();
    showPopup();
  });
});
//////////////////////////////////////////////

// // Typing switch change effect
// let word = "Developer";
// const switchText = function () {
//   let i = 1;
//   function loopAdd() {
//     if (i <= word.length) {
//       textToggle.textContent = word.slice(0, i);
//       i++;
//     }
//   }
//   setInterval(() => {
//     loopAdd();
//   }, 100);
// };
// const switchTextBack = function () {
//   let i = 1;
//   function loopReduce() {
//     if (i <= word.length) {
//       textToggle.textContent = word.slice(0, -i);
//       i++;
//     }
//   }
//   setInterval(() => {
//     loopReduce();
//   }, 100);
// };
// setInterval(() => {
//   switchText();
//   setTimeout(() => {
//     switchTextBack();
//   }, 2000);
// }, 3000);

///////////////////////////////////
// Counters animation
const startCounting = function () {
  counters.forEach((val) => {
    let intialVal = 0;
    let finalVal = parseInt(val.getAttribute("data-target"));
    let time = Math.ceil(interval / finalVal);
    let counter = setInterval(() => {
      intialVal += 2;
      val.textContent = intialVal;

      if (intialVal == finalVal) {
        clearInterval(counter);
      }
    }, time);
  });
};
window.addEventListener("scroll", function () {
  if (window.scrollY >= 1800 && window.scrollY < 2000) {
    startCounting();
  }
});
// //////////////////////////
