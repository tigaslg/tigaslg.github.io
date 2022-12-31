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