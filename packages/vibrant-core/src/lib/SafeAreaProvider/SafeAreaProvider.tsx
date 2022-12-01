import type { FC } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { GenerateStyle, SafeAreaContextValue, SafeAreaProviderProps } from './SafeAreaProviderProps';

const SafeAreaContext = createContext<SafeAreaContextValue>({
  insets: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  generateStyle: () => ({}),
});

export const SafeAreaProvider: FC<SafeAreaProviderProps> = ({ children }) => {
  const [topInset, setTopInset] = useState<number>(0);
  const [leftInset, setLeftInset] = useState<number>(0);
  const [rightInset, setRightInset] = useState<number>(0);
  const [bottomInset, setBottomInset] = useState<number>(0);

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

      setTopInset(parseInt(style.getPropertyValue('--safe-area-inset-top'), 10));

      setLeftInset(parseInt(style.getPropertyValue('--safe-area-inset-left'), 10));

      setRightInset(parseInt(style.getPropertyValue('--safe-area-inset-right'), 10));

      setBottomInset(parseInt(style.getPropertyValue('--safe-area-inset-bottom'), 10));
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
      insets: {
        top: topInset,
        left: leftInset,
        right: rightInset,
        bottom: bottomInset,
      },
      generateStyle,
    }),
    [bottomInset, leftInset, rightInset, topInset]
  );

  return <SafeAreaContext.Provider value={contextValue}>{children}</SafeAreaContext.Provider>;
};

export const useSafeArea = (): SafeAreaContextValue => useContext(SafeAreaContext);
