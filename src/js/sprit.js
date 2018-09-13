import initSlideOut from './slide-out';
import initIntroVideo from './intro-video';

const slideOutContainer = document.getElementById('slide-out-container');
const videoElement = document.getElementById('intro-video');
const logoOverlay = document.getElementById('logo-overlay');

const slideOut = initSlideOut(window, slideOutContainer);
const introVideo = initIntroVideo(window, videoElement, logoOverlay);

const loop = () => {
  slideOut.tick();
  introVideo.tick();
};

window.setInterval(loop, 100);
