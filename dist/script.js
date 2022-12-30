// navbar
window.onscroll = function () {
  const nav = document.getElementById("navbar");
  const fixednav = nav.offsetTop;

  if (window.scrollY > 0) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
};

// hero animation
const myTimeout = setTimeout(scrollStart, 10000);
function scrollStart() {
  document.getElementById("body").classList.remove("overflow-hidden");
}

var typed = new Typed('#ketikan', {
    strings: ["TigaSulung Creative present"],
    typeSpeed: 100
});

gsap.from("#hero, #tombol-mode", { delay: 7, duration: 2, opacity: 0 });
gsap.to("#ketikan, #tombol-mode", { delay: 5, duration: 2, opacity: 0 });


// dark mode
const tombol_mode_light = document.getElementById("tombol-mode-light");
const tombol_mode_dark = document.getElementById("tombol-mode-dark");
const tag_html = document.getElementById("tag-html");

tombol_mode_light.addEventListener("click", function () {
  console.log(tag_html.getAttribute("data-theme"));
  if (tag_html.getAttribute("data-theme") == "light") {
    tag_html.setAttribute("data-theme", "dark");
  }
});

tombol_mode_dark.addEventListener("click", function () {
  console.log(tag_html.getAttribute("data-theme"));
  if (tag_html.getAttribute("data-theme") == "dark") {
    tag_html.setAttribute("data-theme", "light");
  }
});
