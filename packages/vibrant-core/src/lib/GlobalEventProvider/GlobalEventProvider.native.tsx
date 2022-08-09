import type { FC } from 'react';
import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import { View } from 'react-native';
import type { EventListener, GlobalEventContextValue, GlobalEventProviderProps } from './types';

const GlobalEventContext = createContext<GlobalEventContextValue>({
  addEventListener: () => {},
  removeEventListener: () => {},
});

export const GlobalEventProvider: FC<GlobalEventProviderProps> = ({ children }) => {
  const clickEventListenersRef = useRef<EventListener[]>([]);

  const addEventListener = useCallback((eventType: EventType, listener: EventListener) => {
    if (eventType === 'click') {
      clickEventListenersRef.current = [...clickEventListenersRef.current, listener];
    }
  }, []);

  const removeEventListener = useCallback((eventType: EventType, listener: EventListener) => {
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

  return (
    <GlobalEventContext.Provider value={contextValue}>
      <View
        onStartShouldSetResponder={() => clickEventListenersRef.current.length > 0}
        onResponderGrant={event => {
          clickEventListenersRef.current.forEach(listener => {
            listener(event.nativeEvent);
          });
        }}
      >
        {children}
      </View>
    </GlobalEventContext.Provider>
  );
};

export const useGlobalEvent = (): GlobalEventContextValue => useContext(GlobalEventContext);

GlobalEventProvider.displayName = 'GlobalEventProvider';
