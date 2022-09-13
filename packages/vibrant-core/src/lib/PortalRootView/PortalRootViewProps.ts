import { withVariation } from '../withVariation';

export type PortalRootViewProps = {
  zIndex: number;
  onRender: (container: Element | number | null) => void;
};

export const withPortalRootViewVariation = withVariation<PortalRootViewProps>('PortalRootView')();
