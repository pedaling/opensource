import { useEffect } from 'react';
import { useSafeDeps } from '@vibrant-ui/utils';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ innerRef, children, onMount, ...restProps }) => {
  const onMountDeps = useSafeDeps(onMount);

  useEffect(() => {
    onMountDeps.current?.();
  }, [onMountDeps]);

  return (
    <Box base={Portal} ref={innerRef} {...restProps}>
      {children}
    </Box>
  );
});
