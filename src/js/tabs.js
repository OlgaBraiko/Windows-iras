const tabs = ({
  header: headerSelector,
  tabs: tabsSelector,
  contents: contentSelector,
  activeClass: activeClass,
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contents[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  };
  hideTabContent();
  showTabContent();

  const open = (target) => {
    tabs.forEach((item, i) => {
      if (target == item || target.parentNode == item) {
        hideTabContent();
        showTabContent(i);
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
