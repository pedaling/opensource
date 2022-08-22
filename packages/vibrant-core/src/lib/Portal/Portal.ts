import ReactDOM from 'react-dom';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ children }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const container = document.fullscreenElement ? document.fullscreenElement : document.body;

  return ReactDOM.createPortal(children, container);
});
