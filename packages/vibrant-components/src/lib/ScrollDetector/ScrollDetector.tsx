import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useScroll } from '@vibrant-ui/core';
import type { ScrollDirection } from '@vibrant-ui/core';
type ScrollDetectorProps = {
  children: (_: { scrollDirection: ScrollDirection; scrollPosition: number }) => ReactElement;
};

export const ScrollDetector = ({ children }: ScrollDetectorProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollDirection, addEventListener } = useScroll();

  useEffect(() => {
    const cleanEventListener = addEventListener(({ scrollPosition }) => {
      setScrollPosition(scrollPosition);
    });

    return cleanEventListener;
  }, [addEventListener]);

  return children ? children({ scrollDirection, scrollPosition }) : null;
};
