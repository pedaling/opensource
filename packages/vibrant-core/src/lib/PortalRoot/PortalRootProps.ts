import type { ReactElementChild } from '../../types';
import { withVariation } from '../withVariation';

export type PortalRootProps = {
  children: ReactElementChild;
  zIndex: number;
};

export type PortalRootContextValue = {
  container: Element | number | null;
};

export const withPortalRootVariation = withVariation<PortalRootProps>('PortalRoot')();
