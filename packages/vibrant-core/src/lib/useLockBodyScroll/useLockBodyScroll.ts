import { useEffect, useRef } from 'react';
import { platform } from '../platform';

const IS_BROWSER = platform === 'web' && typeof window !== 'undefined';

export const useLockBodyScroll = (active = false) => {
  const bodyStyleRef = useRef({
    paddingRight: '',
    overflow: '',
    touchAction: '',
  });

  const lockBodyScroll = () => {
    if (!IS_BROWSER) {
      return;
    }

    bodyStyleRef.current = {
      paddingRight: document.body.style.paddingRight,
      overflow: document.body.style.overflow,
      touchAction: document.body.style.touchAction,
    };

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    const computedBodyPaddingRight = parseInt(
      window.getComputedStyle(document.body).getPropertyValue('padding-right'),
      10
    );

    requestAnimationFrame(() => {
      document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth}px`;

      document.body.style.overflow = 'hidden';

      document.body.style.touchAction = 'none';
    });
  };

  const unlockBodyScroll = () => {
    if (!IS_BROWSER) {
      return;
    }

    requestAnimationFrame(() => {
      document.body.style.paddingRight = bodyStyleRef.current.paddingRight;

      document.body.style.overflow = bodyStyleRef.current.overflow;

      document.body.style.touchAction = bodyStyleRef.current.touchAction;
    });
  };

  useEffect(() => {
    if (!active) {
      return;
    }

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [active]);
};
