const changeModalState = (state) => {
  const windowsForms = document.querySelectorAll(".balcon_icons_img");
  const windowWidths = document.querySelectorAll("#width");
  const windowHeigths = document.querySelectorAll("#height");
  const windowTypes = document.querySelectorAll("#view_type");
  const windowsProfiles = document.querySelectorAll(".checkbox");
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  const bindActionElems = (event, elem, prop) => {
    elem.forEach((el, i) => {
      el.addEventListener(event, () => {
        switch (el.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;
          case "INPUT":
            if (el.getAttribute("type" === "checkbox")) {
              i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = el.value;
            }
            break;
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
