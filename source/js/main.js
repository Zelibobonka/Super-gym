import {iosVhFix} from './utils/ios-vh-fix';
import {initVideo} from './modules/init-video';
import {initTabs} from './modules/init-tabs';
import {initCarousels} from './modules/init-carousels';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initTabs();
  initVideo();
  initCarousels();

  document.documentElement.style.setProperty('--scrollbarWidth',
      `${window.innerWidth - document.body.clientWidth}px`);

});
