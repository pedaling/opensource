import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { platform } from '../platform/platform.native';
import { usePortalRoot } from '../PortalRoot';
import { useWindowDimensions } from '../useWindowDimensions';
import { withPortalVariation } from './PortalProps';

export const Portal = withPortalVariation(({ innerRef, scrollable, children, style = {}, ...restProps }) => {
  const { createContainer, removeContainer } = usePortalRoot();
  const { width, height } = useWindowDimensions();

  const [container, setContainer] = useState<Element | number | null>(null);

  const { top, right, bottom, left } = style;

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

  const ViewComponent = scrollable ? ScrollView : View;

  if (platform === 'ios') {
    return (
      <FullWindowOverlay style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        <View pointerEvents="box-none">
          <ViewComponent
            ref={innerRef}
            {...restProps}
            style={{ ...style, position: 'absolute', width, height, top, bottom, left, right }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {children}
          </ViewComponent>
        </View>
      </FullWindowOverlay>
    );
  }

  return createPortal(
    <ViewComponent ref={innerRef} {...restProps} style={{ ...style, position: 'absolute' }}>
      {children}
    </ViewComponent>,
    container
  );
});
