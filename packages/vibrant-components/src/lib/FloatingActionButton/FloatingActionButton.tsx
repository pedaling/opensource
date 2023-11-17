import { useMemo } from 'react';
import { Box, transformResponsiveValue, useCurrentTheme, useWindowDimensions } from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { StackedPortal } from '../StackedPortal';
import { withFloatingActionButtonVariation } from './FloatingActionButtonProps';

export const FloatingActionButton = withFloatingActionButtonVariation(
  ({
    order = 1,
    position = 'right',
    offset = 20,
    IconComponent,
    innerRef,
    testId = 'floating-action-button',
    ...restProps
  }) => {
    const { width: viewportWidth } = useWindowDimensions();
    const {
      theme: { zIndex },
    } = useCurrentTheme();
    const {
      theme: { contentArea },
    } = useCurrentTheme();

    const offsetProps = useMemo(
      () => ({
        [position]: transformResponsiveValue(
          contentArea.padding,
          value => Math.max(viewportWidth - contentArea.maxWidth, 0) / 2 + value
        ),
        offset,
      }),
      [viewportWidth, contentArea, offset, position]
    );

    return (
      <StackedPortal
        id="floating-action-button"
        data-testid={testId}
        order={order}
        zIndex={zIndex.floatingActionButton}
        safeAreaMode="margin"
        position="bottom"
        width={50}
        height={50}
        {...offsetProps}
      >
        {({ layoutStyle }) => (
          <Box elevationLevel={1} borderRadius={25} {...layoutStyle}>
            <Pressable
              ref={innerRef}
              width="100%"
              height="100%"
              borderRadius={25}
              backgroundColor="surface2"
              alignItems="center"
              justifyContent="center"
              overlayColor="onView1"
              interactions={['hover', 'focus', 'active']}
              {...restProps}
            >
              <IconComponent size={20} />
            </Pressable>
          </Box>
        )}
      </StackedPortal>
    );
  }
);
