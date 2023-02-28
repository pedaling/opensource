import type { FC, PropsWithChildren } from 'react';
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ScrollView } from 'react-native';
import { Box } from '../Box';
import type {
  EventListenerCallback,
  PageScrollContextValue,
  PageScrollProps,
  ScrollDirection,
} from './PageScrollProps';

const PageScrollContext = createContext<PageScrollContextValue>({
  addEventListener: () => () => {},
  scrollDirection: 'unset',
});

export const PageScroll: FC<PropsWithChildren<PageScrollProps>> = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('unset');

  const eventListenerRefs = useRef<EventListenerCallback[]>([]);
  const scrollPosition = useRef(0);

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
      <Box base={ScrollView} scrollEventThrottle={16} onScroll={handleScroll} contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </Box>
    </PageScrollContext.Provider>
  );
};

export const useScroll = () => useContext(PageScrollContext);
