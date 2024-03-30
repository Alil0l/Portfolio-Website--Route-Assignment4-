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
