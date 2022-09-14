import type { Ref } from 'react';
import type { DisplaySystemProps, OverflowSystemProps, PositionSystemProps, SizingSystemProps } from '@vibrant-ui/core';
import type { ReactElementChild } from '../../types';
import { withVariation } from '../withVariation';

type PortalBoxProps = DisplaySystemProps &
  OverflowSystemProps &
  Omit<PositionSystemProps, 'position'> &
  SizingSystemProps & {
    ref?: Ref<any>;
    children: ReactElementChild | ReactElementChild[];
  };

export const withPortalBoxVariation = withVariation<PortalBoxProps>('PortalBox')();
