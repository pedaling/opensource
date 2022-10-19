import { useEffect, useState } from 'react';
import { FullWindowOverlay } from 'react-native-screens';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { useWindowDimensions } from '@vibrant-ui/core';
import { useSafeDeps } from '@vibrant-ui/utils';
import { platform } from '../platform/platform.native';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, BoxComponent, innerRef, onMount, ...restProps }) => {
  const { createContainer, removeContainer } = usePortalRoot();
  const { width, height } = useWindowDimensions();

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

  if (platform === 'ios') {
    return (
      <FullWindowOverlay style={{ position: 'absolute', width, height }}>
        <BoxComponent ref={innerRef} position="absolute" {...restProps}>
          {children}
        </BoxComponent>
      </FullWindowOverlay>
    );
  }

  return createPortal(
    <BoxComponent ref={innerRef} position="absolute" {...restProps}>
      {children}
    </BoxComponent>,
    container
  );
});
