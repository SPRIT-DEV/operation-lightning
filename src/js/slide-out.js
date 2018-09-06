const WAIT_UNTIL_SHOW = 3000;

const initSlideOut = (global, element) => {
  let visible = false;
  let lastScroll = Date.now();
  let lastPageYOffset = global.pageYOffset;

  const hide = () => {
    if (!visible) return;
    visible = false;
    element.classList.remove('visible');
  };

  const show = () => {
    if (visible) return;
    visible = true;
    element.classList.add('visible');
  };

  return {
    tick() {
      const { pageYOffset } = global;
      const cachedLastScroll = lastScroll;
      const now = Date.now();

      // user never scrolled
      if (!visible && pageYOffset === 0) {
        return;
      }

      // user is at the top of the page
      if (pageYOffset === 0) {
        hide();
        return;
      }

      // user just scrolled
      if (pageYOffset !== lastPageYOffset) {
        lastPageYOffset = pageYOffset;
        lastScroll = now;
        hide();
        return;
      }

      // user stayed at the same posY for WAIT_UNTIL_SHOW ms
      if (now - cachedLastScroll >= WAIT_UNTIL_SHOW) {
        show();
      }
    }
  };
};

export default initSlideOut;
