import type { Ref } from 'react';

import type { ReactElementChildren } from '@vibrant-ui/core';
import { withVariation } from '../withVariation';

export type PortalProps = {
  ref?: Ref<any>;
  scrollable?: boolean;
  style?: any;
  children?: ReactElementChildren;
};

export const withPortalVariation = withVariation<PortalProps>('Portal')();
