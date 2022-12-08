import { useEffect } from 'react';
import { useResponsiveValue, useStackedPortal } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';
import { withStackedItemVariation } from './StackedItemProps';

export const StackedItem = withStackedItemVariation(
  ({ id, order, position, height, renderBeforeCalculate, children }) => {
    const { offset, unregister, changeHeight } = useStackedPortal({ id, order, position });
    const { getResponsiveValue } = useResponsiveValue();

    useEffect(() => {
      if (isDefined(height)) {
        const currentHeight = getResponsiveValue(height);

        changeHeight(currentHeight);
      }
    }, [changeHeight, getResponsiveValue, height]);

    useEffect(
      () => () => {
        unregister();
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );

    return renderBeforeCalculate || isDefined(offset)
      ? children({ offset: offset ?? 0, setHeight: changeHeight })
      : null;
  }
);
