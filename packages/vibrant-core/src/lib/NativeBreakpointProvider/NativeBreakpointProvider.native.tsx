import type { FC, ReactElement } from 'react';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { Dimensions, View } from 'react-native';
import { useCurrentTheme } from '../ThemeProvider';

type ContextType = {
  currentBreakpointIndex: number;
  rootBreakpointIndex: number;
};

const BreakpointContext = createContext<ContextType>({
  currentBreakpointIndex: 0,
  rootBreakpointIndex: 0,
});

export const NativeBreakpointProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [width, setWidth] = useState(() => Dimensions.get('window').width);
  const {
    theme: { breakpoints: rootBreakpoint },
  } = useCurrentTheme({ root: true });

  const {
    theme: { breakpoints: currentBreakpoint },
  } = useCurrentTheme({ root: false });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  }, []);

  const currentBreakpointIndex = useMemo(() => {
    const index = currentBreakpoint.findIndex(breakpoint => breakpoint >= width);

    return index === -1 ? currentBreakpoint.length : index;
  }, [currentBreakpoint, width]);

  const rootBreakpointIndex = useMemo(() => {
    const index = rootBreakpoint.findIndex(breakpoint => breakpoint >= width);

    return index === -1 ? rootBreakpoint.length : index;
  }, [rootBreakpoint, width]);

  const contextValue = useMemo(
    () => ({ currentBreakpointIndex, rootBreakpointIndex }),
    [currentBreakpointIndex, rootBreakpointIndex]
  );

  return (
    <BreakpointContext.Provider value={contextValue}>
      <View onLayout={onLayout} style={{ width: '100%', height: '100%' }}>
        {children}
      </View>
    </BreakpointContext.Provider>
  );
};

export const useNativeBreakpoint = ({ root }: { root: boolean }) => {
  const { rootBreakpointIndex, currentBreakpointIndex } = useContext(BreakpointContext);

  return root ? rootBreakpointIndex : currentBreakpointIndex;
};
