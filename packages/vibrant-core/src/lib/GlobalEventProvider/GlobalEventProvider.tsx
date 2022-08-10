import type { FC } from 'react';
import { createContext, useCallback, useContext, useMemo } from 'react';
import type { EventListener, EventType, GlobalEventContextValue, GlobalEventProviderProps, Event } from './types';

const GlobalEventContext = createContext<GlobalEventContextValue>({
  addEventListener: () => {},
  removeEventListener: () => {},
});

export const GlobalEventProvider: FC<GlobalEventProviderProps> = ({ children }) => {
  const addEventListener = useCallback((eventType: EventType, listener:  EventListener<Event<EventType>>) => {
    document.addEventListener(eventType, listener);
  }, []);

  const removeEventListener = useCallback((eventType: EventType, listener:  EventListener<Event<EventType>>) => {
    document.removeEventListener(eventType, listener);
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
