import type { ReactElement } from 'react';
import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { Box, PressableBox, ScrollBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Body } from '../Body';
import { ContainedButton } from '../ContainedButton';
import { HStack } from '../HStack';
import { Space } from '../Space';
import { Title } from '../Title';
import { VStack } from '../VStack';
import { DrawerProvider } from './DrawerContext';
import { DrawerFooter } from './DrawerFooter/DrawerFooter';
import { DrawerHeader } from './DrawerHeader';
import { DrawerPanel } from './DrawerPanel';
import type { DrawerProps } from './DrawerProps';

export const Drawer = ({
  testId = 'drawer',
  children,
  type = 'modal',
  placement,
  open = false,
  onOpen,
  onClose,
}: DrawerProps) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const contents = childArray.filter(child => child.type !== DrawerPanel);
  const panel = childArray.filter(child => child.type === DrawerPanel);

  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(open);
  const [panelSize, setPanelSize] = useState<number>(0);

  const drawerRef = useRef<HTMLDivElement>(null);

  const onKeydown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();

    if (e.code === 'Escape') {
      closePanel();
    }
  }, []);

  useEffect(() => {
    const currentDrawerRef = drawerRef.current;

    currentDrawerRef?.addEventListener('keydown', onKeydown);

    return () => currentDrawerRef?.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);

  useEffect(() => {
    if (isPanelOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isPanelOpen, onClose, onOpen]);

  const closePanel = () => setIsPanelOpen(false);

  // const isStandardType = type === 'standard';

  // const hasDim = type === 'modal';

  const panelWidth = (drawerRef.current?.clientWidth ?? 0) - panelSize;

  /* Control Box Method */
  const [drawerType, setDrawerType] = useState<'modal' | 'overlay' | 'standard'>(type);
  const [drawerDir, setDrawerDir] = useState<'bottom' | 'left' | 'right' | 'top'>(placement);
  const isStandardType = drawerType === 'standard';
  const hasDim = drawerType === 'modal';

  const changeType = () => {
    if (drawerType === 'standard') {
      setDrawerType('overlay');
    } else if (drawerType === 'overlay') {
      setDrawerType('modal');
    } else {
      setDrawerType('standard');
    }
  };

  const changeDirection = () => {
    if (drawerDir === 'right') {
      setDrawerDir('bottom');
    } else if (drawerDir === 'bottom') {
      setDrawerDir('left');
    } else if (drawerDir === 'left') {
      setDrawerDir('top');
    } else {
      setDrawerDir('right');
    }
  };
  /* Control Box Method End */

  return (
    <DrawerProvider
      togglePanel={() => setIsPanelOpen(prev => !prev)}
      placement={drawerDir}
      type={drawerType}
      isOpen={isPanelOpen}
      updatePanelSize={size => setPanelSize(size)}
    >
      <Box width="100%" height="100%" data-testid={testId} tabIndex={0} ref={drawerRef}>
        {/* Control Box */}
        <VStack spacing={8}>
          <HStack spacing={15}>
            <Title level={7}>control box</Title>
            <Body level={2}>{`[type: ${drawerType}]`}</Body>
            <Body level={2}>{`[placement: ${drawerDir}]`}</Body>
          </HStack>
          <HStack alignVertical="center" spacing={10}>
            <ContainedButton kind="tertiary" size="md" onClick={() => setIsPanelOpen(true)}>
              OPEN
            </ContainedButton>
            <ContainedButton kind="tertiary" size="md" onClick={() => setIsPanelOpen(false)}>
              CLOSE
            </ContainedButton>
            <ContainedButton kind="tertiary" size="md" onClick={changeType}>
              Change Type
            </ContainedButton>
            <ContainedButton kind="tertiary" size="md" onClick={changeDirection}>
              Change Placement
            </ContainedButton>
            <ContainedButton kind="tertiary" size="md" onClick={() => setIsPanelOpen(prev => !prev)}>
              ACTION
            </ContainedButton>
          </HStack>
        </VStack>
        {/* Control Box End */}
        <Space height={10} />
        <Box overflow="hidden">
          {isStandardType ? (
            <>
              {drawerDir === 'right' && (
                <HStack width="100%">
                  <Transition animation={{ width: isPanelOpen ? panelWidth : '100%' }}>
                    <ScrollBox>{contents}</ScrollBox>
                  </Transition>
                  {panel}
                </HStack>
              )}
              {drawerDir === 'left' && (
                <HStack width="100%">
                  {panel}
                  <Transition
                    animation={{
                      width: isPanelOpen ? panelWidth : '100%',
                      x: isPanelOpen ? panelSize : 0,
                    }}
                  >
                    <ScrollBox>{contents}</ScrollBox>
                  </Transition>
                </HStack>
              )}
              {drawerDir === 'top' && (
                <VStack width="100%" height="100%">
                  {panel}
                  <ScrollBox>{contents}</ScrollBox>
                </VStack>
              )}
              {drawerDir === 'bottom' && (
                <VStack width="100%" height="100%">
                  <ScrollBox>{contents}</ScrollBox>
                  {panel}
                </VStack>
              )}
            </>
          ) : (
            <Box width="100%" height="100%" position="relative" data-testid="atom-1">
              <ScrollBox width="100%">{contents}</ScrollBox>
              {hasDim && (
                <Transition animation={{ opacity: isPanelOpen ? 1 : 0 }} duration={200}>
                  <PressableBox
                    width="100%"
                    height="100%"
                    backgroundColor="dim"
                    position="absolute"
                    top={0}
                    left={0}
                    zIndex={2}
                    opacity={0}
                    onClick={closePanel}
                    cursor="default"
                  />
                </Transition>
              )}
              {panel}
            </Box>
          )}
        </Box>
      </Box>
    </DrawerProvider>
  );
};

Drawer.displayName = 'Drawer';

Drawer.Panel = DrawerPanel;

Drawer.Header = DrawerHeader;

Drawer.Footer = DrawerFooter;
