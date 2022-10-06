import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { useSafeDeps } from '@vibrant-ui/utils';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, BoxComponent, innerRef, onMount, ...restProps }) => {
  const { createContainer, removeContainer } = usePortalRoot();

  const [container, setContainer] = useState<Element | number | null>(null);

  const onMountDeps = useSafeDeps(onMount);

  useEffect(() => {
    let containerIndex: number | null = null;

    createContainer().then(value => {
      if (!value) {
        return;
      }

      containerIndex = value.index;

      setContainer(value.container);
    });

    return () => {
      if (containerIndex === null) {
        return;
      }

      removeContainer(containerIndex);
    };
  }, [createContainer, removeContainer]);

  useEffect(() => {
    if (container) {
      onMountDeps.current?.();
    }
  }, [container, onMountDeps]);

  if (!container) {
    return null;
  }

  return createPortal(
    <BoxComponent ref={innerRef} position="absolute" {...restProps}>
      {children}
    </BoxComponent>,
    container
  );
});
