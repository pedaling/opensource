import { useMemo } from 'react';
import { Box } from '@vibrant-ui/core';
import { useCallbackRef, useComposedRef, useInView } from '@vibrant-ui/utils';
import { withViewableScrollTabPanelVariation } from './ViewableScrollTabPanelProps';

export const ViewableScrollTabPanel = withViewableScrollTabPanelVariation(
  ({ innerRef, offsetTop = 0, onViewableChange, children }) => {
    const options = useMemo(() => ({ rootMargin: `-${offsetTop}px 0px 0px 0px` }), [offsetTop]);
    const innerRefCallback = useCallbackRef(innerRef);

    const { ref: inViewRef } = useInView({
      initialInView: false,
      onChange: onViewableChange,
      options,
    });

    const ref = useComposedRef(innerRefCallback, inViewRef);

    return (
      <Box ref={ref} role="tabpanel">
        {children}
      </Box>
    );
  }
);
