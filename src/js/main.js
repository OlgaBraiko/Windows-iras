import "./slider";
import modals from "./modals";
import tabs from "./tabs";
window.addEventListener("DOMContentLoaded", () => {
  modals();
  tabs({
    header: ".glazing_slider",
    tab: ".glazing_block",
    content: ".glazing_content",
    activClass: "active",
  });
});
