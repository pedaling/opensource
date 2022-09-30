import ReactDOM from 'react-dom';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ innerRef, children, BoxComponent, ...restProps }) => {
  const { container } = usePortalRoot();

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <BoxComponent ref={innerRef} position="fixed" {...restProps}>
      {children}
    </BoxComponent>,
    container as Element
  );
});
