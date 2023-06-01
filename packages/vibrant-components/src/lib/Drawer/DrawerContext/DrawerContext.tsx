import type { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

type DrawerContextValue = {
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  deliverPanelSize: (panelSize: number) => void;
  containerSize: number;
};

const DrawerContext = createContext<DrawerContextValue>({
  togglePanel: () => {},
  type: 'standard',
  placement: 'right',
  isOpen: false,
  deliverPanelSize: () => {},
  containerSize: 0,
});

type DrawerProviderProps = {
  children: ReactElement | ReactElement[];
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  deliverPanelSize: (panelSize: number) => void;
  containerSize: number;
};

export const DrawerProvider: FC<DrawerProviderProps> = ({
  children,
  togglePanel,
  type,
  placement,
  isOpen,
  deliverPanelSize,
  containerSize,
}) => (
  <DrawerContext.Provider value={{ togglePanel, type, placement, isOpen, deliverPanelSize, containerSize }}>
    {children}
  </DrawerContext.Provider>
);

export const useDrawer = () => {
  const { togglePanel, type, placement, isOpen, deliverPanelSize, containerSize } = useContext(DrawerContext);

  return {
    togglePanel,
    type,
    placement,
    isOpen,
    deliverPanelSize,
    containerSize,
  };
};
