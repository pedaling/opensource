import { useCallback, useEffect, useId } from 'react';
import { platform } from '../platform';

const IS_BROWSER = platform === 'web' && typeof window !== 'undefined';

let initialBodyStyle: {
  paddingRight: string;
  overflow: string;
  touchAction: string;
} | null;
const lockedIds = new Set();

export const useLockBodyScroll = (active = false) => {
  const id = useId();

  const lockBodyScroll = useCallback(() => {
    if (!initialBodyStyle) {
      initialBodyStyle = {
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
    }

    lockedIds.add(id);
  }, [id]);

  const unlockBodyScroll = useCallback(() => {
    if (lockedIds.size === 1 && lockedIds.has(id)) {
      requestAnimationFrame(() => {
        if (!initialBodyStyle) {
          return;
        }

        document.body.style.paddingRight = initialBodyStyle.paddingRight;

        document.body.style.overflow = initialBodyStyle.overflow;

        document.body.style.touchAction = initialBodyStyle.touchAction;

        initialBodyStyle = null;
      });
    }

    lockedIds.delete(id);
  }, [id]);

  useEffect(() => {
    if (!active || !IS_BROWSER) {
      return;
    }

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [active, lockBodyScroll, unlockBodyScroll]);
};
