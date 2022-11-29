import ReactDOM from 'react-dom';
import { usePortalRoot } from '../PortalRoot';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ innerRef, scrollable, children, style, ...restProps }) => {
  const { container } = usePortalRoot();

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div ref={innerRef} style={{ ...style, position: 'fixed', overflow: scrollable ? 'auto' : '' }} {...restProps}>
      {children}
    </div>,
    container as Element
  );
});
