const CDN_URL = 'https://cdn.sprit.cloud/sprit/';
const SCROLL_THRESHOLD = 30;

const initIntroVideo = (global, videoElement, logoOverlay) => {
  let initialPlayHappened = false;
  let canPlay = false;
  const pause = () => {
    videoElement.pause();
    videoElement.classList.remove('visible');
    logoOverlay.classList.add('visible');
  };

  const play = () => {
    initialPlayHappened = true;
    videoElement.play();
    videoElement.classList.add('visible');
    logoOverlay.classList.remove('visible');
  };

  videoElement.addEventListener('canplay', () => {
    canPlay = true;
  });

  videoElement.addEventListener('ended', () => {
    pause();
  });

  const mp4Source = global.document.createElement('source');
  mp4Source.setAttribute('src', `${CDN_URL}sprit-intro.mp4`);
  mp4Source.setAttribute('type', 'video/mp4');

  const webmSource = global.document.createElement('source');
  webmSource.setAttribute('src', `${CDN_URL}sprit-intro.webm`);
  webmSource.setAttribute('type', 'video/webm; codecs=\'vp9, vorbis\'');

  videoElement.appendChild(webmSource);
  videoElement.appendChild(mp4Source);

  return {
    tick() {
      const { pageYOffset } = global;

      if (!initialPlayHappened && canPlay && pageYOffset === 0) {
        play();
      }

      if (pageYOffset > SCROLL_THRESHOLD) {
        pause();
      }
    }
  };
};

export default initIntroVideo;
