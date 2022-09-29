import type { Ref } from 'react';
import type { ReactElementChild } from '../../types';
import type { LayoutEvent } from '../Box';
import type { DisplaySystemProps, OverflowSystemProps, PositionSystemProps, SizingSystemProps } from '../props';
import { withVariation } from '../withVariation';

type PortalBoxProps = DisplaySystemProps &
  OverflowSystemProps &
  Omit<PositionSystemProps, 'position'> &
  SizingSystemProps & {
    ref?: Ref<any>;
    onLayout?: (layoutEvent: LayoutEvent) => void;
    children: ReactElementChild | ReactElementChild[];
  };

export const withPortalBoxVariation = withVariation<PortalBoxProps>('PortalBox')();
