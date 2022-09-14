import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { Box } from '../Box';
import { usePortalRoot } from '../PortalRoot';
import { withPortalBoxVariation } from './PortalBoxProps';

export const PortalBox = withPortalBoxVariation(({ children, ...restProps }) => {
  const { createContainer, removeContainer } = usePortalRoot();

  const [container, setContainer] = useState<Element | number | null>(null);

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

  if (!container) {
    return null;
  }

  return createPortal(
    <Box position="absolute" {...restProps}>
      {children}
    </Box>,
    container
  );
});
