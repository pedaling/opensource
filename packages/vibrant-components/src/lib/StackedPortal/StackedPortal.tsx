import { useCallback, useEffect, useMemo, useState } from 'react';
import type { LayoutEvent, ResponsiveValue } from '@vibrant-ui/core';
import { Box, PortalBox, transformResponsiveValue, useSafeArea, useStackedPortal } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { withStackedPortalVariation } from './StackedPortalProps';

export const StackedPortal = withStackedPortalVariation(
  ({ id, order, children, position, positionOffset, safeAreaMode = 'none', ...restProps }) => {
    const { insets } = useSafeArea();
    const { addEventListener, registerPortal, unregisterPortal, setPortalHeight } = useStackedPortal();

    const [calculatedOffset, setCalculatedOffset] = useState<number | null>(null);
    const [height, setHeight] = useState<number | undefined>();

    const positionStyle = useMemo(() => {
      const style: {
        [key in string]?: ResponsiveValue<number>;
      } = {};

      if (calculatedOffset !== null) {
        style[position] = transformResponsiveValue(positionOffset, value => calculatedOffset + value);
      }

      if (safeAreaMode !== 'none' && calculatedOffset === 0) {
        style[`${safeAreaMode[0]}${position[0]}`] = insets[position];
      }

      return style;
    }, [calculatedOffset, insets, position, positionOffset, safeAreaMode]);

    const handleOffsetChange = useCallback((offset: number | 'loading') => {
      if (offset === 'loading') {
        setCalculatedOffset(null);

        return;
      }

      setCalculatedOffset(offset);
    }, []);

    addEventListener(
      { position, id, order },
      {
        offsetChange: handleOffsetChange,
      }
    );

    const handleLayout = useCallback(
      (layout: LayoutEvent) => {
        if (!isDefined(calculatedOffset)) {
          return;
        }

        setHeight(layout.height);
      },
      [calculatedOffset]
    );

    useEffect(() => {
      addEventListener(
        { position, id, order },
        {
          offsetChange: handleOffsetChange,
        }
      );

      registerPortal({ position, id, order });

      return () => {
        unregisterPortal({ position, id, order });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!isDefined(height)) {
        return;
      }

      setPortalHeight({
        id,
        order,
        position,
        height: height + positionOffset + (calculatedOffset === 0 ? insets[position] : 0),
      });
    }, [calculatedOffset, height, id, insets, order, position, positionOffset, setPortalHeight]);

    return (
      <PortalBox hidden={calculatedOffset === null} {...positionStyle} {...restProps}>
        <Box onLayout={handleLayout}>{children}</Box>
      </PortalBox>
    );
  }
);
