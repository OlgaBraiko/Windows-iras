const modals = () => {
 02_Tabs
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
 
  const bindModal = ({
    triggers: triggerSelector,
    modal: modalSelector,
    close: closeSelector,
  }) => {
  master
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

  02_Tabs
    const closeModal = (close, modal) => {
      close.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
    };

    closeModal();

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
 
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
      if (e.code.toLowerCase() === "escape") {
        closeModal();
  master
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  };
  02_Tabs
  showModalByTime(".popup", 60000);

  bindModal({
    trigger: ".popup_engineer_btn",
    modal: ".popup_engineer",
    close: ".popup_engineer .popup_close",
  });
  bindModal(".phone_link", ".popup", ".popup .popup_close");
 
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
  master
};

export default modals;
