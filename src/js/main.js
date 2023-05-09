import "./slider";
import tabs from "./tabs";
import modal from "./modal";
import forms from "./forms";
import images from "./images";
import changeModalState from "./changeModalState";
import timer from "./timer";

window.addEventListener("DOMContentLoaded", () => {
  const modalState = {};
  const deadline = "2023-05-12";

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
  images();
  changeModalState(modalState);
  timer(".container1", deadline);
});
