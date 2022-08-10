import type { ReactElementChild } from '../../types';

export type ClickEvent = {
  pageX: number;
  pageY: number;
};

export type EventListener<Event> = (event: Event) => void;

export type EventType = 'click';

export type Event<EventType> = EventType extends 'click' ? ClickEvent : never;

export type GlobalEventContextValue = {
  addEventListener: (eventType: EventType, listener: EventListener<Event<EventType>>) => void;
  removeEventListener: (eventType: EventType, listener: EventListener<Event<EventType>>) => void;
};

export type GlobalEventProviderProps = {
  children: ReactElementChild;
};
