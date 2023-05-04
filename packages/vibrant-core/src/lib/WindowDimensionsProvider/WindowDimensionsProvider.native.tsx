import type { FC, ReactElement } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { Dimensions, View } from 'react-native';
import type { WindowDimensionsContextValue } from './WindowDimensionsProviderProps';

const WindowDimensionsContext = createContext<WindowDimensionsContextValue>({
  width: 0,
  height: 0,
});

export const WindowDimensionsProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [width, setWidth] = useState(() => Dimensions.get('window').width);
  const [height, setHeight] = useState(() => Dimensions.get('window').height);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);

    setHeight(event.nativeEvent.layout.height);
  }, []);

  const contextValue = useMemo(
    () => ({
      width,
      height,
    }),
    [height, width]
  );

  return (
    <WindowDimensionsContext.Provider value={contextValue}>
      <View onLayout={onLayout} style={{ width: '100%', height: '100%' }}>
        {children}
      </View>
    </WindowDimensionsContext.Provider>
  );
};

export const useWindowDimensions = () => useContext(WindowDimensionsContext);
