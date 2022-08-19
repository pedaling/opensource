import type { ReactNode } from 'react';
import { withVariation } from '@vibrant-ui/core';

type PortalProps = {
  children: ReactNode;
};

export const withPortalVariation = withVariation<PortalProps>('Portal')();
