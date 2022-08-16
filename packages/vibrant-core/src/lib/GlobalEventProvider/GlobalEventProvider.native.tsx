import type { FC } from 'react';
import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import type { Event, EventListener, EventType, GlobalEventContextValue, GlobalEventProviderProps } from './types';

const GlobalEventContext = createContext<GlobalEventContextValue>({
  addEventListener: () => {},
  removeEventListener: () => {},
});

export const GlobalEventProvider: FC<GlobalEventProviderProps> = ({ children }) => {
  const clickEventListenersRef = useRef<EventListener<Event<EventType>>[]>([]);

  const addEventListener = useCallback((eventType: EventType, listener: EventListener<Event<EventType>>) => {
    if (eventType === 'click') {
      clickEventListenersRef.current = [...clickEventListenersRef.current, listener];
    }
  }, []);

  const removeEventListener = useCallback((eventType: EventType, listener: EventListener<Event<EventType>>) => {
    if (eventType === 'click') {
      clickEventListenersRef.current = clickEventListenersRef.current.filter(
        clickEventListener => clickEventListener !== listener
      );
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      addEventListener,
      removeEventListener,
    }),
    [addEventListener, removeEventListener]
  );

  return <GlobalEventContext.Provider value={contextValue}>{children}</GlobalEventContext.Provider>;
};

export const useGlobalEvent = (): GlobalEventContextValue => useContext(GlobalEventContext);

GlobalEventProvider.displayName = 'GlobalEventProvider';
