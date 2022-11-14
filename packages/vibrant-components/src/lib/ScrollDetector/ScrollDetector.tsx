import type { ReactElement } from 'react';
import { useScroll } from '@vibrant-ui/core';
import type { EventListenerCallback, ScrollDirection } from '@vibrant-ui/core';
type ScrollDetectorProps = {
  children: (_: {
    scrollDirection: ScrollDirection;
    addEventListener: (callback: EventListenerCallback) => void;
  }) => ReactElement;
};

export const ScrollDetector = ({ children }: ScrollDetectorProps) => {
  const { scrollDirection, addEventListener } = useScroll();

  return children ? children({ scrollDirection, addEventListener }) : null;
};
