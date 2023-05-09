import "./slider";
import tabs from "./tabs";
import modal from "./modal";
import forms from "./forms";
 

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
  06_modalImage
  images();
 
  changeModalState(modalState);
  timer(".container1", deadline);
  master
});
