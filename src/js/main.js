import "./slider";
import modal from "./modal";
import tabs from "./tabs";
window.addEventListener("DOMContentLoaded", () => {
  modal();
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
});
