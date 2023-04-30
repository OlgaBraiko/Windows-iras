import "./slider";
import tabs from "./tabs";
import modal from "./modal";
import forms from "./forms";
window.addEventListener("DOMContentLoaded", () => {
  tabs({
    header: ".glazing_slider",
    tabs: ".glazing_block",
    contents: ".glazing_content",
    activeClass: "active",
  });
  tabs({
    header: ".balcon_icons",
    tabs: ".balcon_icons_img",
    contents: ".big_img > img",
    activeClass: "do_image_more",
    display: "inline-block",
  });
});

window.addEventListener("DOMContentLoaded", () => {
  modal();
});
window.addEventListener("DOMContentLoaded", () => {
  forms();
});
