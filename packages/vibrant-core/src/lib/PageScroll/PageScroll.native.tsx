import type { FC, PropsWithChildren, ReactElement } from 'react';
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { ScrollView } from 'react-native';

type PageScrollProps = {
  children: ReactElement;
};

type PageScrollContextValue = {
  isScrollUp: boolean;
  isScrollDown: boolean;
  scrollPosition: number;
};

const PageScrollContext = createContext<PageScrollContextValue>({
  isScrollDown: false,
  isScrollUp: false,
  scrollPosition: 0,
});

type ScrollDirection = 'down' | 'up';

export const PageScroll: FC<PropsWithChildren<PageScrollProps>> = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollY = useRef(0);

  const handleScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentY = e.nativeEvent.contentOffset.y;

    if (currentY < prevScrollY.current && currentY > prevScrollY.current && currentY !== 0) {
      return;
    }

    if (currentY > prevScrollY.current) {
      setScrollDirection('down');
    } else if (currentY < prevScrollY.current) {
      setScrollDirection('up');
    }

    prevScrollY.current = currentY;

    setScrollPosition(Math.max(currentY, 0));
  }, []);

  const pageScrollContextValue = useMemo<PageScrollContextValue>(
    () => ({
      isScrollUp: scrollDirection === 'up',
      isScrollDown: scrollDirection === 'down',
      scrollPosition,
    }),
    [scrollDirection, scrollPosition]
  );

  return (
    <PageScrollContext.Provider value={pageScrollContextValue}>
      <ScrollView
        scrollEventThrottle={10}
        onScroll={e => {
          handleScroll(e);
        }}
      >
        {children}
      </ScrollView>
    </PageScrollContext.Provider>
  );
};

export const useScroll = () => {
  const { isScrollDown, isScrollUp, scrollPosition } = useContext(PageScrollContext);

  return {
    isScrollDown,
    isScrollUp,
    scrollPosition,
  };
};
