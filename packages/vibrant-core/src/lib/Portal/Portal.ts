import ReactDOM from 'react-dom';
import { usePortalRoot } from '../PortalRoot';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ children }) => {
  const { container } = usePortalRoot();

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(children, container as Element);
});
