import type { FC, ReactElement } from 'react';
import { createContext, useContext } from 'react';

type DrawerContextValue = {
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  containerSize: number;
  panelSizePixel: number;
  deliverPanelSize: (panelSize: number) => void;
};

const DrawerContext = createContext<DrawerContextValue>({
  togglePanel: () => {},
  type: 'standard',
  placement: 'right',
  isOpen: false,
  containerSize: 0,
  panelSizePixel: 0,
  deliverPanelSize: () => {},
});

type DrawerProviderProps = {
  children: ReactElement | ReactElement[];
  togglePanel: () => void;
  type: 'modal' | 'overlay' | 'standard';
  placement: 'bottom' | 'left' | 'right' | 'top';
  isOpen: boolean;
  containerSize: number;
  panelSizePixel: number;
  deliverPanelSize: (panelSize: number) => void;
};

export const DrawerProvider: FC<DrawerProviderProps> = ({
  children,
  togglePanel,
  type,
  placement,
  isOpen,
  containerSize,
  panelSizePixel,
  deliverPanelSize,
}) => (
  <DrawerContext.Provider
    value={{
      togglePanel,
      type,
      placement,
      isOpen,
      containerSize,
      panelSizePixel,
      deliverPanelSize,
    }}
  >
    {children}
  </DrawerContext.Provider>
);

export const useDrawer = () => {
  const { togglePanel, type, placement, isOpen, deliverPanelSize, containerSize, panelSizePixel } =
    useContext(DrawerContext);

  return {
    togglePanel,
    type,
    placement,
    isOpen,
    containerSize,
    panelSizePixel,
    deliverPanelSize,
  };
};
