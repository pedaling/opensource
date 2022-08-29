import type { RefObject } from 'react';
import type { ReactElementChild } from '../../types';
import { withVariation } from '../withVariation';

export type PortalRootProps = {
  children: ReactElementChild;
};

export type PortalRootContextValue = {
  containerRef: RefObject<Element | number | null>;
};

export const withPortalRootVariation = withVariation<PortalRootProps>('PortalRoot')();
