const links = document.querySelectorAll(".navbar > a");

const addActive = (el) => {
  links.forEach((e) => {
    e.classList.remove("active");
  });
  el.classList.add("active");
};

window.addEventListener("scroll", () => {
  if (window.scrollY >= 0 && window.scrollY <= 559) {
    addActive(links[0]);
  } else if (window.scrollY >= 560 && window.scrollY <= 1199) {
    addActive(links[1]);
  } else if (window.scrollY >= 1200 && window.scrollY <= 1999) {
    addActive(links[2]);
  } else if (window.scrollY >= 2000) {
    addActive(links[3]);
  }
});

AOS.init();
