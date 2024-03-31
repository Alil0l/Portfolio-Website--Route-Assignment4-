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

// Typing switch change effect
let counter = 0;
const switchFunc = function () {
  if (counter % 2 == 0) {
    switchTextSpan.textContent = "Developer";
  } else {
    switchTextSpan.textContent = "Designer";
  }
  counter++;
};
const textAni = function () {
  let word = switchTextSpan.textContent;
  let i = 1;
  function ani() {
    if (i <= word.length) {
      switchTextSpan.textContent = word.slice(0, -i);
      i++;
    }
  }
  setInterval(() => {
    ani();
  }, 100);
};
setInterval(() => {
  switchFunc();
  textAni();
}, 2000);
