import { useMemo } from 'react';
import {
  Box,
  PortalBox,
  transformResponsiveValue,
  useCurrentTheme,
  useSafeArea,
  useWindowDimensions,
} from '@vibrant-ui/core';
import { Pressable } from '../Pressable';
import { withFloatingActionButtonVariation } from './FloatingActionButtonProps';

export const FloatingActionButton = withFloatingActionButtonVariation(
  ({ position = 'right', offset = 20, IconComponent, innerRef, ...restProps }) => {
    const { insets } = useSafeArea();
    const { width: viewportWidth } = useWindowDimensions();
    const {
      theme: { contentArea },
    } = useCurrentTheme();

    const offsetProps = useMemo(
      () => ({
        [position]: transformResponsiveValue(
          contentArea.padding,
          value => Math.max(viewportWidth - contentArea.maxWidth, 0) / 2 + value
        ),
        bottom:
          typeof insets.bottom === 'string' ? `max(${insets.bottom}, ${offset}px)` : Math.max(insets.bottom, offset),
      }),
      [viewportWidth, contentArea, insets, offset, position]
    );

    return (
      <PortalBox {...offsetProps} zIndex={1}>
        <Box borderRadius={25} elevationLevel={1}>
          <Pressable
            ref={innerRef}
            width={50}
            height={50}
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
      </PortalBox>
    );
  }
);
