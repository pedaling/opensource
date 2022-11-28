import type { ReactElement } from 'react';

export type ScrollDirection = 'down' | 'unset' | 'up';

export type EventListenerCallback = (args: { scrollDirection: ScrollDirection; scrollPosition: number }) => void;

export type PageScrollContextValue = {
  addEventListener: (callback: EventListenerCallback) => () => void;
  scrollDirection: ScrollDirection;
};

export type PageScrollProps = {
  children: ReactElement;
};
