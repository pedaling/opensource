import type { OverflowSystemProps, PositionSystemProps, SizingSystemProps } from '@vibrant-ui/core';
import type { ReactElementChild } from '../../types';
import { withVariation } from '../withVariation';

type PortalBoxProps = OverflowSystemProps &
  Omit<PositionSystemProps, 'position'> &
  SizingSystemProps & {
    children: ReactElementChild | ReactElementChild[];
  };

export const withPortalBoxVariation = withVariation<PortalBoxProps>('PortalBox')();
