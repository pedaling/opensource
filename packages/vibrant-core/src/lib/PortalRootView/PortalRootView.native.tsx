import { useEffect, useRef } from 'react';
import { View, findNodeHandle } from 'react-native';
import { withPortalRootViewVariation } from './PortalRootViewProps';

export const PortalRootView = withPortalRootViewVariation(({ zIndex, onRender }) => {
  const viewRef = useRef<View>(null);

  useEffect(() => {
    onRender(findNodeHandle(viewRef.current));
  }, [onRender]);

  return (
    <View
      ref={viewRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex,
      }}
      pointerEvents="box-none"
      collapsable={false}
    />
  );
});
