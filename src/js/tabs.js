const tabs = ({
  header: headerSelector,
  tabs: tabsSelector,
  content: contentSelector,
  activeClass: activeClass,
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
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

  function hideTabContent() {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    contents[i].style.display = "block";
    tabs[i] = classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabsSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))
    ) {
      tabs.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
