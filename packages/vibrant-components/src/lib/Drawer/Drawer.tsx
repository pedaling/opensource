import type { ReactElement } from 'react';
import { Children, useState } from 'react';
import { Box } from '@vibrant-ui/core';
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

export const Drawer = ({ testId = 'drawer', children, type, placement, open = false }: DrawerProps) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const contents = childArray.filter(child => child.type !== DrawerPanel);
  const panel = childArray.filter(child => child.type === DrawerPanel);

  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(open);
  /* Control Box Method */
  const [drawerType, setDrawerType] = useState<'modal' | 'overlay' | 'standard'>(type);
  const [drawerDir, setDrawerDir] = useState<'bottom' | 'left' | 'right' | 'top'>(placement);
  /* Control Box Method End*/

  const isStandardType = drawerType === 'standard';

  const hasDim = drawerType === 'modal';

  /* Control Box Method */
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

  const defaultSize = 320;

  return (
    <DrawerProvider
      togglePanel={() => setIsPanelOpen(prev => !prev)}
      placement={drawerDir}
      type={drawerType}
      isOpen={isPanelOpen}
    >
      <Box width="100%" height="100%" p={10} data-testid={testId} tabIndex={0}>
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
              Change Direction
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
                  <Transition animation={{ width: isPanelOpen ? `calc(100% - ${defaultSize}px` : '100%' }}>
                    <Box>{contents}</Box>
                  </Transition>
                  {panel}
                </HStack>
              )}
              {drawerDir === 'left' && (
                <HStack width="100%">
                  {panel}
                  <Transition animation={{ width: isPanelOpen ? `calc(100% - ${defaultSize}px` : '100%' }}>
                    <Box>{contents}</Box>
                  </Transition>
                </HStack>
              )}
              {drawerDir === 'top' && (
                <VStack width="100%" height="100%">
                  {panel}
                  <Box>{contents}</Box>
                </VStack>
              )}
              {drawerDir === 'bottom' && (
                <VStack width="100%" height="100%">
                  <Box>{contents}</Box>
                  {panel}
                </VStack>
              )}
            </>
          ) : (
            <Box width="100%" height="100%" position="relative" data-testid="atom-1">
              <Box width="100%">{contents}</Box>
              {hasDim && (
                <Transition animation={{ opacity: isPanelOpen ? 1 : 0 }} duration={200}>
                  <Box
                    width="100%"
                    height="100%"
                    backgroundColor="dim"
                    position="absolute"
                    top={0}
                    left={0}
                    zIndex={2}
                    opacity={0}
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
