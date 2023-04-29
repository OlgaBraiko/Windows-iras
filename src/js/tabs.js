const tabs = ({
  header: headerSelector,
  tabs: tabsSelector,
  contents: contentSelector,
  activeClass: activeClass,
  display: display = "block",
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentSelector);
  const windows = document.querySelectorAll("[data-modal");

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contents[i].style.display = display;
    tabs[i].classList.add(activeClass);
  };
  hideTabContent();
  showTabContent();

  const openWindow = (target) => {
    windows.forEach((window, i) => {
      if (target == window || target.parentNode == window) {
        hideTabContent();
        showTabContent(i);
      }
    });
  };

  const open = (target) => {
    tabs.forEach((tab, i) => {
      if (target == tab || target.parentNode == tab) {
        hideTabContent();
        showTabContent(i);
        openWindow();
      }
    });
  };

  document.addEventListener("keypress", (e) => {
    const target = e.target;
    if (e.key.toLocaleLowerCase() === "enter") {
      open(target);
    }
  });

  header.addEventListener("click", (e) => {
    const target = e.target;
    open(target);
  });
};

export default tabs;
