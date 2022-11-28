import ReactDOM from 'react-dom';
import { usePortalRoot } from '../PortalRoot';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ innerRef, children, scrollable: _, style, ...restProps }) => {
  const { container } = usePortalRoot();

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div ref={innerRef} style={{ ...style, position: 'fixed' }} {...restProps}>
      {children}
    </div>,
    container as Element
  );
});
