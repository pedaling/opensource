import type { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

type DrawerContextValue = {
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  updatePanelSize: (panelSize: number) => void;
};

const DrawerContext = createContext<DrawerContextValue>({
  togglePanel: () => {},
  type: 'standard',
  placement: 'right',
  isOpen: false,
  updatePanelSize: () => {},
});

type DrawerProviderProps = {
  children: ReactElement | ReactElement[];
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  updatePanelSize: (panelSize: number) => void;
};

export const DrawerProvider: FC<DrawerProviderProps> = ({
  children,
  togglePanel,
  type,
  placement,
  isOpen,
  updatePanelSize,
}) => (
  <DrawerContext.Provider value={{ togglePanel, type, placement, isOpen, updatePanelSize }}>
    {children}
  </DrawerContext.Provider>
);

export const useDrawer = () => {
  const { togglePanel, type, placement, isOpen, updatePanelSize } = useContext(DrawerContext);

  return {
    togglePanel,
    type,
    placement,
    isOpen,
    updatePanelSize,
  };
};
