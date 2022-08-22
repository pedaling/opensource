import type { Context } from 'react';
import { useContext } from 'react';
import { RootTagContext } from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPortal } from 'react-native/Libraries/Renderer/shims/ReactNative';
import { withPortalVariation } from './PortalProps';

declare module 'react-native' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export const RootTagContext: Context<number>;
}

export const Portal = withPortalVariation(({ children }) => {
  const rootTag = useContext(RootTagContext);

  if (rootTag) {
    return createPortal(children, rootTag);
  }

  return null;
});
