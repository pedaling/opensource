// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { usePortalRoot } from '../PortalRoot';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ children }) => {
  const { containerRef } = usePortalRoot();

  if (containerRef.current) {
    return createPortal(children, containerRef.current);
  }

  return null;
});
