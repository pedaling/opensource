import type { ReactElementChild } from '../../types';

export type ClickEvent = {
  pageX: number;

  pageY: number;
};

export type EventListener = (event: ClickEvent) => void;

export type EventType = 'click';

export type GlobalEventContextValue = {
  addEventListener: (eventType: EventType, listener: EventListener) => void;
  removeEventListener: (eventType: EventType, listener: EventListener) => void;
};

export type GlobalEventProviderProps = {
  children: ReactElementChild;
};
