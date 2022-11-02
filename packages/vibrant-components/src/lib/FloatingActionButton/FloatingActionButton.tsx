import { useMemo } from 'react';
import { transformResponsiveValue, useCurrentTheme, useWindowDimensions } from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { StackedPortal } from '../StackedPortal';
import { withFloatingActionButtonVariation } from './FloatingActionButtonProps';

export const FloatingActionButton = withFloatingActionButtonVariation(
  ({ order = 1, position = 'right', offset = 20, IconComponent, innerRef, ...restProps }) => {
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
        order={order}
        zIndex={zIndex.floatingActionButton}
        safeAreaMode="margin"
        position="bottom"
        width={50}
        height={50}
        {...offsetProps}
      >
        {({ layoutStyle }) => (
          <Pressable
            ref={innerRef}
            borderRadius={25}
            backgroundColor="surface2"
            elevationLevel={1}
            alignItems="center"
            justifyContent="center"
            overlayColor="onView1"
            interactions={['hover', 'focus', 'active']}
            {...restProps}
            {...layoutStyle}
          >
            <IconComponent size={20} />
          </Pressable>
        )}
      </StackedPortal>
    );
  }
);
