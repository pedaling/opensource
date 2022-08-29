import ReactDOM from 'react-dom';
import { usePortalRoot } from '../PortalRoot';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ children }) => {
  const { containerRef } = usePortalRoot();

  if (!containerRef.current) {
    return null;
  }

  return ReactDOM.createPortal(children, containerRef.current as Element);
});
