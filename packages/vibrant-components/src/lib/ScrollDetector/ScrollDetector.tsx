import type { ReactElement } from 'react';
import { useScroll } from '@vibrant-ui/core';
type ScrollDetectorProps = {
  children: (_: { isScrollDown: boolean; isScrollUp: boolean; scrollPosition: number }) => ReactElement;
};

export const ScrollDetector = ({ children }: ScrollDetectorProps) => {
  const { isScrollDown, isScrollUp, scrollPosition } = useScroll();

  return children ? children({ isScrollDown, isScrollUp, scrollPosition }) : null;
};
