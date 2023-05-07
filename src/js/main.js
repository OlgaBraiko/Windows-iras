import "./slider";
import tabs from "./tabs";
import modal from "./modal";
import forms from "./forms";
import images from "./images";

window.addEventListener("DOMContentLoaded", () => {
  tabs({
    header: ".glazing_slider",
    tabs: ".glazing_block",
    contents: ".glazing_content",
    activeClass: "active",
  });
});

window.addEventListener("DOMContentLoaded", () => {
  modal();
});
window.addEventListener("DOMContentLoaded", () => {
  forms();
  images();
});
