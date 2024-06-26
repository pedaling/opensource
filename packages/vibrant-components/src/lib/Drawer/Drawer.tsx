import type { ReactElement } from 'react';
import { Children, useState } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { Box, PressableBox, ScrollBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { useControllableState, useEscapeEvent } from '@vibrant-ui/utils';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { DrawerProvider } from './DrawerContext';
import { DrawerFooter } from './DrawerFooter/DrawerFooter';
import { DrawerHeader } from './DrawerHeader';
import { DrawerPanel } from './DrawerPanel';
import type { DrawerProps } from './DrawerProps';

const ANIMATE_DURATION = 200;
const DIM_Z_INDEX = 2;

export const Drawer = ({
  testId = 'drawer',
  children,
  type = 'modal',
  placement,
  open,
  defaultOpen,
  onOpen,
  onClose,
}: DrawerProps) => {
  const childArray = Children.toArray(children) as ReactElement[];
  const contents = childArray.filter(child => child.type !== DrawerPanel);
  const panel = childArray.filter(child => child.type === DrawerPanel);
  const [isPanelOpen, setIsPanelOpen] = useControllableState<boolean>({
    value: open,
    defaultValue: defaultOpen,
    onValueChange: (value: boolean) => {
      if (value) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
  });
  const [panelSizePixel, setPanelSizePixel] = useState<number>(0);
  const [containerSize, setContainerSize] = useState<number>(0);

  const closePanel = () => {
    onClose?.();

    return setIsPanelOpen(false);
  };

  const { ref: drawerRef } = useEscapeEvent(closePanel);

  const onContainerLayout = ({ width, height }: LayoutEvent) => {
    const isVertical = placement === 'left' || placement === 'right';

    setContainerSize(isVertical ? width : height);
  };

  const isStandardType = type === 'standard';

  const hasDim = type === 'modal' && isPanelOpen;

  return (
    <DrawerProvider
      togglePanel={() => setIsPanelOpen(!isPanelOpen)}
      placement={placement}
      type={type}
      isOpen={isPanelOpen}
      containerSize={containerSize}
      panelSizePixel={panelSizePixel}
      deliverPanelSize={panelSize => setPanelSizePixel(panelSize)}
    >
      <Box width="100%" height="100%" data-testid={testId} tabIndex={0} ref={drawerRef} overflow="hidden">
        {isStandardType ? (
          <>
            {placement === 'right' && (
              <HStack width="100%" onLayout={onContainerLayout}>
                <Transition
                  duration={ANIMATE_DURATION}
                  animation={{ width: isPanelOpen ? containerSize - panelSizePixel : '100%' }}
                >
                  <ScrollBox data-testid="drawer-content-container">{contents}</ScrollBox>
                </Transition>
                <Box position="fixed" height="100%" width="100%">
                  {panel}
                </Box>
              </HStack>
            )}
            {placement === 'left' && (
              <HStack width="100%" onLayout={onContainerLayout}>
                <Box position="fixed" height="100%" width="100%">
                  {panel}
                </Box>
                <Transition
                  duration={ANIMATE_DURATION}
                  animation={{
                    width: isPanelOpen ? containerSize - panelSizePixel : '100%',
                    x: isPanelOpen ? panelSizePixel : 0,
                  }}
                >
                  <ScrollBox data-testid="drawer-content-container">{contents}</ScrollBox>
                </Transition>
              </HStack>
            )}
            {placement === 'top' && (
              <VStack width="100%" height="100%">
                {panel}
                <Transition
                  duration={ANIMATE_DURATION}
                  animation={{
                    y: isPanelOpen ? panelSizePixel : 0,
                  }}
                >
                  <ScrollBox data-testid="drawer-content-container" onLayout={onContainerLayout} top={-panelSizePixel}>
                    {contents}
                  </ScrollBox>
                </Transition>
              </VStack>
            )}
            {placement === 'bottom' && (
              <VStack width="100%" height="100%">
                <ScrollBox data-testid="drawer-content-container" onLayout={onContainerLayout}>
                  {contents}
                </ScrollBox>
                {panel}
              </VStack>
            )}
          </>
        ) : (
          <Box width="100%" height="100%" position="relative">
            <ScrollBox data-testid="drawer-content-container" width="100%" onLayout={onContainerLayout}>
              {contents}
            </ScrollBox>
            {hasDim && (
              <Transition animation={{ opacity: isPanelOpen ? 1 : 0 }} duration={ANIMATE_DURATION}>
                <PressableBox
                  width="100%"
                  height="100%"
                  backgroundColor="dim"
                  position="absolute"
                  top={0}
                  left={0}
                  zIndex={DIM_Z_INDEX}
                  opacity={0}
                  onClick={closePanel}
                  cursor="default"
                  data-testid="dim-background"
                />
              </Transition>
            )}
            <Box position="fixed" width="fit-content" height="100%" zIndex={DIM_Z_INDEX + 1}>
              {panel}
            </Box>
          </Box>
        )}
      </Box>
    </DrawerProvider>
  );
};

Drawer.displayName = 'Drawer';

Drawer.Panel = DrawerPanel;

Drawer.Header = DrawerHeader;

Drawer.Footer = DrawerFooter;
