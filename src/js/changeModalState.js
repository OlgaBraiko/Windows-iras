const changeModalState = (state) => {
  const windowsForms = document.querySelectorAll(".balcon_icons_img");
  const windowWidths = document.querySelectorAll("#width");
  const windowHeigths = document.querySelectorAll("#height");
  const windowTypes = document.querySelectorAll("#view_type");
  const windowsProfiles = document.querySelectorAll(".checkbox");

  const bindActionElems = (event, elem, prop) => {
    elem.forEach((el, i) => {
      el.addEventListener(event, () => {
        switch (el.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            state[prop] = el.value;
          case "SELECT":
            state[prop] = el.value;
            break;
        }
        console.log(state);
      });
    });
  };
  bindActionElems("click", windowsForms, "form");
  bindActionElems("input", windowHeigths, "height");
  bindActionElems("input", windowWidths, "width");
  bindActionElems("change", windowTypes, "type");
  bindActionElems("change", windowsProfiles, "profile");
};

export default changeModalState;
