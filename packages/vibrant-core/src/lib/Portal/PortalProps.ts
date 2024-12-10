import type { Ref } from 'react';
import type { ReactElementChildren } from '../../types';
import { withVariation } from '../withVariation';

export type PortalProps = {
  ref?: Ref<any>;
  style?: any;
  scrollable?: boolean;
  children?: ReactElementChildren;
};

export const withPortalVariation = withVariation<PortalProps>('Portal')();
