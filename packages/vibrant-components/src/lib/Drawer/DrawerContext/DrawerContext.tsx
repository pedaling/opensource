import type { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

type DrawerContextValue = {
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
};

const DrawerContext = createContext<DrawerContextValue>({
  togglePanel: () => {},
  type: 'standard',
  placement: 'right',
  isOpen: false,
});

type DrawerProviderProps = {
  children: ReactElement | ReactElement[];
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
};

export const DrawerProvider: FC<DrawerProviderProps> = ({ children, togglePanel, type, placement, isOpen }) => (
  <DrawerContext.Provider value={{ togglePanel, type, placement, isOpen }}>{children}</DrawerContext.Provider>
);

export const useDrawer = () => {
  const { togglePanel, type, placement, isOpen } = useContext(DrawerContext);

  return {
    togglePanel,
    type,
    placement,
    isOpen,
  };
};
