import type { FC, PropsWithChildren, ReactElement } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useScrollDirection } from '../useScrollDirection';

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

export const PageScroll: FC<PropsWithChildren<PageScrollProps>> = ({ children }) => {
  const { isScrollUp, isScrollDown } = useScrollDirection();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY < scrollPosition && window.scrollY > scrollPosition && window.scrollY !== 0) {
      return;
    }

    setScrollPosition(window.scrollY);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const pageScrollContextValue = useMemo<PageScrollContextValue>(
    () => ({
      isScrollUp,
      isScrollDown,
      scrollPosition,
    }),
    [isScrollDown, isScrollUp, scrollPosition]
  );

  return <PageScrollContext.Provider value={pageScrollContextValue}>{children}</PageScrollContext.Provider>;
};

export const useScroll = () => {
  const { isScrollDown, isScrollUp, scrollPosition } = useContext(PageScrollContext);

  return {
    isScrollDown,
    isScrollUp,
    scrollPosition,
  };
};
