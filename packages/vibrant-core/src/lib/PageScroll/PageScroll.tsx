import type { FC, PropsWithChildren, ReactElement } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

type PageScrollProps = {
  children: ReactElement;
};

export type ScrollDirection = 'down' | 'unset' | 'up';

export type EventListenerCallback = (args: { scrollDirection: ScrollDirection; scrollPosition: number }) => void;

type PageScrollContextValue = {
  addEventListener: (callback: EventListenerCallback) => () => void;
  scrollDirection: ScrollDirection;
};

const PageScrollContext = createContext<PageScrollContextValue>({
  addEventListener: () => () => {},
  scrollDirection: 'unset',
});

export const PageScroll: FC<PropsWithChildren<PageScrollProps>> = ({ children }) => {
  const scrollPosition = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('unset');
  const eventListenerRefs = useRef<EventListenerCallback[]>([]);

  const addEventListener = useCallback<PageScrollContextValue['addEventListener']>(callback => {
    eventListenerRefs.current.push(callback);

    return () => (eventListenerRefs.current = eventListenerRefs.current.filter(func => func !== callback));
  }, []);

  const handleScroll = useCallback(() => {
    const currentPosition = window.scrollY;
    let currentDirection: ScrollDirection = 'unset';

    if (currentPosition < scrollPosition.current) {
      currentDirection = 'up';
    } else if (currentPosition > scrollPosition.current) {
      currentDirection = 'down';
    }

    scrollPosition.current = window.scrollY;

    setScrollDirection(currentDirection);

    eventListenerRefs.current.forEach(callback =>
      callback({ scrollPosition: currentPosition, scrollDirection: currentDirection })
    );
  }, []);

  const pageScrollContextValue = useMemo<PageScrollContextValue>(
    () => ({
      scrollDirection,
      addEventListener,
    }),
    [addEventListener, scrollDirection]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <PageScrollContext.Provider value={pageScrollContextValue}>{children}</PageScrollContext.Provider>;
};

export const useScroll = () => {
  const { scrollDirection, addEventListener } = useContext(PageScrollContext);

  return {
    scrollDirection,
    addEventListener,
  };
};
