import type { ReactElementChild } from '../../types';
import { withVariation } from '../withVariation';

export type Position = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
};

export type PortalRootProps = {
  children: ReactElementChild;
  zIndex: number;
  offset?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
};

export type PortalRootContextValue = {
  container: Element | number | null;
  position: Position;
};

export const withPortalRootVariation = withVariation<PortalRootProps>('PortalRoot')();
