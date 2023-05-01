import "./slider";
import tabs from "./tabs";
import modal from "./modal";
import forms from "./forms";
import changeModalState from "./changeModalState";

window.addEventListener("DOMContentLoaded", () => {
  const modalState = {};

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
  modal();
  forms();
  changeModalState(modalState);
});
