import {iosVhFix} from './utils/ios-vh-fix';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);

  // Modules

  window.addEventListener('load', () => {

  });
});
