import ReactDOM from 'react-dom';
import { Box } from '../Box';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, ...restProps }) => {
  const { container } = usePortalRoot();

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <Box position="fixed" {...restProps}>
      {children}
    </Box>,
    container as Element
  );
});
