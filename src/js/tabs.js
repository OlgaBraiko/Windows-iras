const tabs = ({
  header: headerSelector,
  tab: tabsSelector,
  content: contentSelector,
  activeClass: activeClass,
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = "block";
    tabs[i] = classList.add(activeClass);
  };
  hideTabContent();
  showTabContent();

  document.addEventListener("click", (e) => {
    if (e.code.toLowerCase() === "enter") {
      hideTabContent();
      showTabContent();
    }
  });

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
