import type { FC, PropsWithChildren, ReactElement } from 'react';
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ScrollView } from 'react-native';

type PageScrollProps = {
  children: ReactElement;
};

type ScrollDirection = 'down' | 'unset' | 'up';

type EventListenerCallback = (args: { scrollDirection: ScrollDirection; scrollPosition: number }) => void;

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

  const handleScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentPosition = e.nativeEvent.contentOffset.y;
    let currentDirection: ScrollDirection = 'unset';

    if (currentPosition < scrollPosition.current) {
      currentDirection = 'up';
    } else if (currentPosition > scrollPosition.current) {
      currentDirection = 'down';
    }

    setScrollDirection(currentDirection);

    scrollPosition.current = currentPosition;

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

  return (
    <PageScrollContext.Provider value={pageScrollContextValue}>
      <ScrollView scrollEventThrottle={16} onScroll={handleScroll}>
        {children}
      </ScrollView>
    </PageScrollContext.Provider>
  );
};

export const useScroll = () => {
  const { scrollDirection, addEventListener } = useContext(PageScrollContext);

  return {
    scrollDirection,
    addEventListener,
  };
};
