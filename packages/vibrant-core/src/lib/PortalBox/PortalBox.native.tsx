// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { Box } from '@vibrant-ui/core';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, ...restProps }) => {
  const { container } = usePortalRoot();

  if (container) {
    return createPortal(
      <Box position="absolute" {...restProps}>
        {children}
      </Box>,
      container
    );
  }

  return null;
});
