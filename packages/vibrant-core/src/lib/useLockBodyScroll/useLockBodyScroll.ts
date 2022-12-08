import { useCallback, useEffect, useId } from 'react';
import { platform } from '../platform';

const IS_BROWSER = platform === 'web' && typeof window !== 'undefined';

let initialBodyStyle:
  | {
      paddingRight: string;
      overflow: string;
      touchAction: string;
    }
  | undefined = undefined;
const lockedIds = new Set();

export const useLockBodyScroll = (active = false) => {
  const id = useId();

  const lock = useCallback(() => {
    const { body } = document;

    if (!initialBodyStyle) {
      initialBodyStyle = {
        paddingRight: document.body.style.paddingRight,
        overflow: document.body.style.overflow,
        touchAction: document.body.style.touchAction,
      };

      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

      body.style.paddingRight = `${scrollBarWidth}px`;

      body.style.overflow = 'hidden';

      body.style.touchAction = 'none';
    }

    lockedIds.add(id);
  }, [id]);

  const unlock = useCallback(() => {
    const { body } = document;

    if (!initialBodyStyle) {
      return;
    }

    if (lockedIds.size === 1 && lockedIds.has(id)) {
      body.style.paddingRight = initialBodyStyle.paddingRight;

      body.style.overflow = initialBodyStyle.overflow;

      body.style.touchAction = initialBodyStyle.touchAction;

      initialBodyStyle = undefined;
    }

    lockedIds.delete(id);
  }, [id]);

  useEffect(() => {
    if (!active || !IS_BROWSER) {
      return;
    }

    lock();

    return () => {
      unlock();
    };
  }, [active, lock, unlock]);
};
