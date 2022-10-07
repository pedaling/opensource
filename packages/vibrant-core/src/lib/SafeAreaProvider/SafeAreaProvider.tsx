import type { FC } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { Edge, GenerateStyle, SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

export const SafeAreaContext = createContext<SafeAreaContextValue>({
  insets: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  generateStyle: () => ({}),
});

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => {
  const [insets, setInsets] = useState<Record<Edge, number>>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const generateStyle: GenerateStyle = ({
    edges = ['top', 'left', 'right', 'bottom'],
    minInsets = { top: 0, left: 0, right: 0, bottom: 0 },
  }) =>
    edges.reduce(
      (prev, edge) => ({
        ...prev,
        [edge]: transformResponsiveValue(
          minInsets[edge],
          value => `max(var(--safe-area-inset-${edge}, 0px), ${value ?? 0}px)`
        ),
      }),
      {}
    );

  useEffect(() => {
    const updateSafeAreaInsets = () => {
      const style = getComputedStyle(document.documentElement);

      setInsets({
        top: parseInt(style.getPropertyValue('--safe-area-inset-top'), 10),
        left: parseInt(style.getPropertyValue('--safe-area-inset-left'), 10),
        right: parseInt(style.getPropertyValue('--safe-area-inset-right'), 10),
        bottom: parseInt(style.getPropertyValue('--safe-area-inset-bottom'), 10),
      });
    };

    updateSafeAreaInsets();

    window.addEventListener('resize', updateSafeAreaInsets);

    window.addEventListener('scroll', updateSafeAreaInsets);

    return () => {
      window.removeEventListener('resize', updateSafeAreaInsets);

      window.removeEventListener('scroll', updateSafeAreaInsets);
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      insets,
      generateStyle,
    }),
    [insets]
  );

  return <SafeAreaContext.Provider value={contextValue}>{children}</SafeAreaContext.Provider>;
};

export const useSafeArea = (): SafeAreaContextValue => useContext(SafeAreaContext);
