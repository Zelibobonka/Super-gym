const tabLinks = document.querySelectorAll('.subscription__item-time');

const initTabs = () => {
  tabLinks.forEach((el) => {
    el.addEventListener('click', openTabs);
    el.addEventListener('keydown', openTabs);
  });


  function openTabs(el) {
    if (el.code === 'Enter' || el.code === 'Space' || el.button === 0) {
      const tabLink = document.querySelectorAll('.subscription__item-time');
      const tabContent = document.querySelectorAll('.subscription__price, .subscription__subtitle');

      const btnTarget = el.currentTarget;
      const time = btnTarget.dataset.time;

      el.preventDefault();

      tabContent.forEach((elem) => {
        elem.classList.remove('active');
      });

      tabLink.forEach((elem) => {
        elem.classList.remove('active');
      });

      const tabContentActive = document.querySelectorAll(`[data-price="${time}"]`);

      tabContentActive.forEach((elem) => {
        elem.classList.add('active');
      });

      btnTarget.classList.add('active');
    }
  }
};

export {initTabs};
