import type { ReactElement } from 'react';
import { Children, useMemo } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Divider } from '../../Divider';
import { VStack } from '../../VStack';
import { useDrawer } from '../DrawerContext';
import { DrawerFooter } from '../DrawerFooter/DrawerFooter';
import { DrawerHeader } from '../DrawerHeader';
import type { DefaultPanelSizeType } from './DrawerPanelProps';
import { withDrawerPanelVariation } from './DrawerPanelProps';

const ANIMATE_DURATION = 200;

export const DrawerPanel = withDrawerPanelVariation(({ testId = 'drawer-panel', children, defaultSize = 360 }) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const header = childArray.filter(child => child.type === DrawerHeader);
  const footer = childArray.filter(child => child.type === DrawerFooter);
  const contents = childArray.filter(child => child.type !== DrawerHeader && child.type !== DrawerFooter);

  const { placement, type, isOpen, containerSize, deliverPanelSize, panelSizePixel } = useDrawer();

  const isVertical = placement === 'left' || placement === 'right';

  const isStandardType = type === 'standard';

  const onPanelLayout = ({ width, height }: LayoutEvent) => {
    const currentPanelSize = isVertical ? width : height;

    deliverPanelSize(currentPanelSize);
  };

  const trimPanelSize = (size: DefaultPanelSizeType, value: number) => {
    if (typeof size === 'string' && size !== 'auto') {
      const ratio = parseInt(size) * 0.01;

      return Number((ratio * value).toFixed(1));
    }

    return value;
  };

  const panelSize = useMemo(() => {
    if (Array.isArray(defaultSize)) {
      return (defaultSize as DefaultPanelSizeType[]).map(size => trimPanelSize(size, containerSize));
    }

    return trimPanelSize(defaultSize, containerSize);
  }, [containerSize, defaultSize]);

  const panelContent = isVertical ? (
    <Box width={panelSize} data-testid={testId} flexGrow={1} height="100%" onLayout={onPanelLayout}>
      <VStack height="100%" alignVertical="space-between">
        <Box width="100%" overflow="hidden">
          {header}
          <Box>{contents}</Box>
        </Box>
        <Box width="100%">{footer}</Box>
      </VStack>
    </Box>
  ) : (
    <Box height={panelSize} width="100%" data-testid={testId} onLayout={onPanelLayout}>
      <VStack height="100%" alignVertical="space-between">
        <Box width="100%" overflow="hidden">
          {header}
          <Box>{contents}</Box>
        </Box>
        <Box width="100%">{footer}</Box>
      </VStack>
    </Box>
  );

  return isStandardType ? (
    <>
      {placement === 'right' && (
        <Box position="absolute" top={0} right={0} height="100%" flexDirection="row">
          <Box flex={0}>
            <Divider direction="vertical" kind="default" />
          </Box>
          <Transition
            animation={{
              x: isOpen ? -panelSizePixel : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box width={panelSize} right={-panelSizePixel} height="100%">
              {panelContent}
            </Box>
          </Transition>
        </Box>
      )}
      {placement === 'left' && (
        <Box position="absolute" top={0} left={0} height="100%" flexDirection="row">
          <Transition
            animation={{
              x: isOpen ? panelSizePixel : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box width={panelSize} left={-panelSizePixel} height="100%">
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
              y: isOpen ? panelSizePixel : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box height={panelSize} top={-panelSizePixel}>
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
              height: isOpen ? panelSize : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box height={panelSize}>{panelContent}</Box>
          </Transition>
        </>
      )}
    </>
  ) : (
    <>
      {placement === 'right' && (
        <Transition animation={{ x: isOpen ? -panelSizePixel : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            right={-panelSizePixel}
            zIndex={3}
            elevationLevel={isOpen ? 3 : undefined}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'left' && (
        <Transition animation={{ x: isOpen ? panelSizePixel : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            left={-panelSizePixel}
            zIndex={3}
            elevationLevel={isOpen ? 3 : undefined}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'top' && (
        <Transition animation={{ y: isOpen ? panelSizePixel : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            top={-panelSizePixel}
            left={0}
            zIndex={3}
            elevationLevel={isOpen ? 3 : undefined}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'bottom' && (
        <Transition animation={{ y: isOpen ? -panelSizePixel : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            bottom={-panelSizePixel}
            left={0}
            zIndex={3}
            elevationLevel={isOpen ? 3 : undefined}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
    </>
  );
});
