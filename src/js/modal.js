const modals = () => {
  const bindModal = ({
    triggers: triggerSelector,
    modal: modalSelector,
    close: closeSelector,
  }) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";

        document.body.classList.add("modal-open");
      });
    });

    const closeModal = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    close.addEventListener("click", () => {
      closeModal();
    });

    document.addEventListener("keypress", (e) => {
      if (e.key.toLowerCase() === "escape") {
        closeModal();
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };
  //showModalByTime(".popup", 60000);

  bindModal({
    triggers: ".popup_engineer_btn",
    modal: ".popup_engineer",
    close: ".popup_engineer .popup_close",
  });
  bindModal({
    triggers: ".phone_link",
    modal: ".popup",
    close: ".popup .popup_close",
  });
  bindModal({
    triggers: ".popup_calc_btn",
    modal: ".popup_calc",
    close: ".popup_calc_close",
  });
  bindModal({
    triggers: ".popup_calc_button",
    modal: ".popup_calc_profile",
    close: ".popup_calc_profile_close",
    closeClick: false,
  });
  bindModal({
    triggers: ".popup_calc_profile_button",
    modal: ".popup_calc_end",
    close: ".popup_calc_end_close",
    closeClick: false,
  });
};

export default modals;
