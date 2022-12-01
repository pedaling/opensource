import { useEffect } from 'react';
import { isDefined } from '@vibrant-ui/utils';
import { useStackedPortal } from '../StackedPortalProvider';
import { useResponsiveValue } from '../useResponsiveValue';
import { withStackedItemVariation } from './StackedItemProps';

export const StackedItem = withStackedItemVariation(
  ({ id, order, position, height, renderBeforeCalculate, children }) => {
    const { offset, changeHeight } = useStackedPortal({ id, order, position });
    const { getResponsiveValue } = useResponsiveValue();

    useEffect(() => {
      if (isDefined(height)) {
        const currentHeight = getResponsiveValue(height);

        changeHeight(currentHeight);
      }
    }, [changeHeight, getResponsiveValue, height]);

    return renderBeforeCalculate || isDefined(offset)
      ? children({ offset: offset ?? 0, setHeight: changeHeight })
      : null;
  }
);
