import {iosVhFix} from './utils/ios-vh-fix';
import {initVideo} from './modules/init-video';
import {initTabs} from './modules/init-tabs';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();
  initTabs();
  initVideo();

  // document.documentElement.style.setProperty('--scrollbarWidth',
  //     `${window.innerWidth - document.body.clientWidth}px`);

  // Modules

  window.addEventListener('load', () => {
  });
});
