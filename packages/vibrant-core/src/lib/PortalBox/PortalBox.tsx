import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSafeDeps } from '@vibrant-ui/utils';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ innerRef, children, BoxComponent, onMount, ...restProps }) => {
  const { container } = usePortalRoot();

  const onMountDeps = useSafeDeps(onMount);

  useEffect(() => {
    onMountDeps.current?.();
  }, [onMountDeps]);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <BoxComponent ref={innerRef} web_position="fixed" {...restProps}>
      {children}
    </BoxComponent>,
    container as Element
  );
});
