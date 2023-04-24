import "./slider";
import modals from "./modal";
import tabs from "./tabs";
window.addEventListener("DOMContentLoaded", () => {
  //modals();
  tabs({
    header: ".glazing_slider",
    tabs: ".glazing_block",
    content: ".glazing_content",
    activeClass: "active",
  });
});
