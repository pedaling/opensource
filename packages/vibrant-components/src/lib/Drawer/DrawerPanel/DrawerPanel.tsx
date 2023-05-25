/* eslint-disable max-lines */
import type { ReactElement } from 'react';
import { Children } from 'react';
import { Box, ScrollBox } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Divider } from '../../Divider';
import { VStack } from '../../VStack';
import { useDrawer } from '../DrawerContext';
import { DrawerFooter } from '../DrawerFooter/DrawerFooter';
import { DrawerHeader } from '../DrawerHeader';
import { withDrawerPanelVariation } from './DrawerPanelProps';

const animationDuration = 200;

export const DrawerPanel = withDrawerPanelVariation(({ testId = 'drawer-panel', children, defaultSize }) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const header = childArray.filter(child => child.type === DrawerHeader);
  const footer = childArray.filter(child => child.type === DrawerFooter);
  const contents = childArray.filter(child => child.type !== DrawerHeader && child.type !== DrawerFooter);

  const { placement, type, isOpen } = useDrawer();

  const isVertical = placement === 'left' || placement === 'right';

  const isStandardType = type === 'standard';

  const panelContent = isVertical ? (
    <Box width={defaultSize} data-testid={testId} flexGrow={1} height="100%">
      <VStack height="100%" alignVertical="space-between">
        <Box width="100%" overflow="hidden">
          {header}
          <ScrollBox>{contents}</ScrollBox>
        </Box>
        <Box width="100%">{footer}</Box>
      </VStack>
    </Box>
  ) : (
    <Box height={defaultSize} width="100%" data-testid={testId}>
      <VStack height="100%" alignVertical="space-between">
        <Box width="100%" overflow="hidden">
          {header}
          <ScrollBox>{contents}</ScrollBox>
        </Box>
        <Box width="100%">{footer}</Box>
      </VStack>
    </Box>
  );

  return isStandardType ? (
    <>
      {placement === 'right' && (
        <Box position="absolute" top={0} right={0} height="100%">
          <Box flex={0}>
            <Divider direction="vertical" kind="default" />
          </Box>
          <Transition
            animation={{
              x: isOpen ? -defaultSize : 0,
            }}
            duration={animationDuration}
            easing="easeOutQuad"
          >
            <Box width={defaultSize} right={-defaultSize} height="100%">
              {panelContent}
            </Box>
          </Transition>
        </Box>
      )}
      {placement === 'left' && (
        <Box position="absolute" top={0} left={0} height="100%">
          <Transition
            animation={{
              x: isOpen ? defaultSize : 0,
            }}
            duration={animationDuration}
            easing="easeOutQuad"
          >
            <Box width={defaultSize} left={-defaultSize} height="100%">
              {panelContent}
            </Box>
          </Transition>
          <Box flex={0}>
            <Divider direction="vertical" kind="default" />
          </Box>
        </Box>
      )}
      {placement === 'top' && (
        <>
          <Transition
            animation={{
              height: isOpen ? defaultSize : 0,
              y: isOpen ? defaultSize : 0,
            }}
            duration={animationDuration}
            easing="easeOutQuad"
          >
            <Box height={defaultSize} top={-defaultSize}>
              {panelContent}
            </Box>
          </Transition>
          <Box flex={0}>
            <Divider direction="horizontal" kind="default" />
          </Box>
        </>
      )}
      {placement === 'bottom' && (
        <>
          <Box flex={0}>
            <Divider direction="horizontal" kind="default" />
          </Box>
          <Transition
            animation={{
              height: isOpen ? defaultSize : 0,
              y: isOpen ? -defaultSize : 0,
            }}
            duration={animationDuration}
            easing="easeOutQuad"
          >
            <Box height={defaultSize} bottom={-defaultSize}>
              {panelContent}
            </Box>
          </Transition>
        </>
      )}
    </>
  ) : (
    <>
      {placement === 'right' && (
        <Transition animation={{ x: isOpen ? -defaultSize : 0 }} duration={animationDuration} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            right={-defaultSize}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'left' && (
        <Transition animation={{ x: isOpen ? defaultSize : 0 }} duration={animationDuration} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            left={-defaultSize}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'top' && (
        <Transition animation={{ y: isOpen ? defaultSize : 0 }} duration={animationDuration} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            top={-defaultSize}
            left={0}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'bottom' && (
        <Transition animation={{ y: isOpen ? -defaultSize : 0 }} duration={animationDuration} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            bottom={-defaultSize}
            left={0}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
    </>
  );
});
