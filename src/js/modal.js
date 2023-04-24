const modals = () => {
  const bindModal = ({
    trigger: triggerSelector,
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
    closeModal();

    close.addEventListener("click", () => {
      closeModal();
    });
  };

  modal.addEventListener("click", () => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const closeModalEsc = () => {
    e.keyCode.addEventListener("click", () => {
      if (e.keyCode === 27) {
        closeModal();
      }
    });
  };
  closeModalEsc();

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };
  showModalByTime(".popup", 60000);

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
};

export default modals;
