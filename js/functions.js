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
