import initSlideOut from './slide-out';

const slideOutContainer = document.getElementById('slide-out-container');

const slideOut = initSlideOut(window, slideOutContainer);

const loop = () => {
  slideOut.tick();
};

window.setInterval(loop, 100);
