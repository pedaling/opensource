import { useCallback, useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'down' | 'up';

type Props = {
  interval?: number;
};

export function useScrollDirection(props: Props = {}) {
  const { interval = 56 } = props;

  const prevScrollY = useRef(0);
  const [direction, setDirection] = useState<ScrollDirection>();

  const handleScroll = useCallback(() => {
    if (
      window.scrollY < prevScrollY.current + interval &&
      window.scrollY > prevScrollY.current - interval &&
      window.scrollY !== 0
    ) {
      return;
    }

    if (window.scrollY < prevScrollY.current) {
      setDirection('up');
    } else if (window.scrollY > prevScrollY.current) {
      setDirection('down');
    }

    prevScrollY.current = window.scrollY;
  }, [interval]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    isScrollUp: direction === 'up',
    isScrollDown: direction === 'down',
  };
}
