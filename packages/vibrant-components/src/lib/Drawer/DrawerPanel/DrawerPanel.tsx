import type { ReactElement } from 'react';
import { Children, useMemo, useState } from 'react';
import type { LayoutEvent } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { Transition } from '@vibrant-ui/motion';
import { Divider } from '../../Divider';
import { VStack } from '../../VStack';
import { useDrawer } from '../DrawerContext';
import { DrawerFooter } from '../DrawerFooter/DrawerFooter';
import { DrawerHeader } from '../DrawerHeader';
import type { PercentWidth } from './DrawerPanelProps';
import { withDrawerPanelVariation } from './DrawerPanelProps';

const ANIMATE_DURATION = 200;

export const DrawerPanel = withDrawerPanelVariation(({ testId = 'drawer-panel', children, defaultSize = 360 }) => {
  const childArray = Children.toArray(children) as ReactElement[];

  const header = childArray.filter(child => child.type === DrawerHeader);
  const footer = childArray.filter(child => child.type === DrawerFooter);
  const contents = childArray.filter(child => child.type !== DrawerHeader && child.type !== DrawerFooter);

  const [translateValue, setTranslateValue] = useState<number>(0);
  const { placement, type, isOpen, containerSize, deliverPanelSize } = useDrawer();

  const isVertical = placement === 'left' || placement === 'right';

  const isStandardType = type === 'standard';

  const onPanelLayout = ({ width, height }: LayoutEvent) => {
    const currentPanelSize = isVertical ? width : height;

    setTranslateValue(currentPanelSize);

    deliverPanelSize(currentPanelSize);
  };

  const convertPercentToNumber = (percent: PercentWidth, value: number) => {
    const ratio = parseInt(percent) * 0.01;

    return Number((ratio * value).toFixed(1));
  };

  const panelSize = useMemo(() => {
    if (typeof defaultSize === 'object') {
      return (defaultSize as (PercentWidth | number | 'auto')[]).map(size => {
        if (typeof size === 'string' && size !== 'auto') {
          return convertPercentToNumber(size, containerSize);
        }

        return size;
      });
    }

    if (typeof defaultSize === 'string' && defaultSize !== 'auto') {
      return convertPercentToNumber(defaultSize, containerSize);
    }

    return defaultSize;
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
        <Box position="absolute" top={0} right={0} height="100%">
          <Box flex={0}>
            <Divider direction="vertical" kind="default" />
          </Box>
          <Transition
            animation={{
              x: isOpen ? -translateValue : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box width={panelSize} right={-translateValue} height="100%">
              {panelContent}
            </Box>
          </Transition>
        </Box>
      )}
      {placement === 'left' && (
        <Box position="absolute" top={0} left={0} height="100%">
          <Transition
            animation={{
              x: isOpen ? translateValue : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box width={panelSize} left={-translateValue} height="100%">
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
              y: isOpen ? translateValue : 0,
            }}
            duration={ANIMATE_DURATION}
            easing="easeOutQuad"
          >
            <Box height={panelSize} top={-translateValue}>
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
        <Transition animation={{ x: isOpen ? -translateValue : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            right={-translateValue}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'left' && (
        <Transition animation={{ x: isOpen ? translateValue : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            height="100%"
            backgroundColor="surface2"
            position="absolute"
            top={0}
            left={-translateValue}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'top' && (
        <Transition animation={{ y: isOpen ? translateValue : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            top={-translateValue}
            left={0}
            zIndex={3}
            elevationLevel={3}
          >
            {panelContent}
          </Box>
        </Transition>
      )}
      {placement === 'bottom' && (
        <Transition animation={{ y: isOpen ? -translateValue : 0 }} duration={ANIMATE_DURATION} easing="easeOutQuad">
          <Box
            width="100%"
            backgroundColor="surface2"
            position="absolute"
            bottom={-translateValue}
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
