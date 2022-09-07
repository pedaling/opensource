import { useCallback, useEffect, useState } from 'react';
import type { LayoutEvent, ResponsiveValue } from '@vibrant-ui/core';
import { Box, PortalBox, transformResponsiveValue, useStackedPortal } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { withStackedPortalVariation } from './StackedPortalProps';

export const StackedPortal = withStackedPortalVariation(
  ({ id, order, children, position, positionOffset, ...restProps }) => {
    const { addEventListener, registerPortal, unregisterPortal, setPortalHeight } = useStackedPortal();

    const [calculatedOffset, setCalculatedOffset] = useState<ResponsiveValue<number> | null>(null);

    const [height, setHeight] = useState<number | undefined>();

    const handleOffsetChange = useCallback(
      (offset: number | 'loading') => {
        if (offset === 'loading') {
          setCalculatedOffset(null);

          return;
        }

        setCalculatedOffset(transformResponsiveValue(positionOffset, value => (value ? offset + value : offset)));
      },
      [positionOffset]
    );

    addEventListener(
      {
        id,
        order,
        position,
      },
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
        {
          id,
          order,
          position,
        },
        {
          offsetChange: handleOffsetChange,
        }
      );

      registerPortal({ id, order, position });

      return () => {
        unregisterPortal({ id, order, position });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!isDefined(height)) {
        return;
      }

      setPortalHeight({ id, order, position, height: height + positionOffset });
    }, [height, id, order, position, positionOffset, setPortalHeight]);

    return (
      <PortalBox {...restProps} {...{ [position]: calculatedOffset }} hidden={calculatedOffset === null}>
        <Box onLayout={handleLayout}>{children}</Box>
      </PortalBox>
    );
  }
);
