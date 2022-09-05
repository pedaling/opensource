import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { addPositionValue } from '@vibrant-ui/utils';
import type { ResponsiveValue } from '../../types';
import { Box } from '../Box';
import { usePortalRoot } from '../PortalRoot';
import { transformResponsiveValue } from '../transformResponsiveValue';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, top, left, right, bottom, ...restProps }) => {
  const { container, position: portalRootPosition } = usePortalRoot();
  const [position, setPosition] = useState<
    | {
        top?: ResponsiveValue<number | string>;
        left?: ResponsiveValue<number | string>;
        right?: ResponsiveValue<number | string>;
        bottom?: ResponsiveValue<number | string>;
      }
    | undefined
  >();

  useEffect(() => {
    setPosition({
      top: transformResponsiveValue(top, value => addPositionValue(portalRootPosition.top, value)),
      left: transformResponsiveValue(left, value => addPositionValue(portalRootPosition.left, value)),
      right: transformResponsiveValue(right, value => addPositionValue(portalRootPosition.right, value)),
      bottom: transformResponsiveValue(bottom, value => addPositionValue(portalRootPosition.bottom, value)),
    });
  }, [bottom, container, left, portalRootPosition, right, top]);

  if (!container || !position) {
    return null;
  }

  return ReactDOM.createPortal(
    <Box position="fixed" {...restProps} {...position}>
      {children}
    </Box>,
    container as Element
  );
});
