import type { Ref } from 'react';
import type { ReactElementChild } from '../../types';
import type { LayoutEvent } from '../Box';
import { Box } from '../Box';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  DisplaySystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  SizingSystemProps,
} from '../props';
import { propVariant } from '../propVariant';
import { ScrollBox } from '../ScrollBox';
import { withVariation } from '../withVariation';

type PortalBoxProps = DisplaySystemProps &
  OverflowSystemProps &
  BorderSystemProps &
  Omit<PositionSystemProps, 'position'> &
  BackgroundSystemProps &
  SizingSystemProps & {
    ref?: Ref<any>;
    onLayout?: (layoutEvent: LayoutEvent) => void;
    scrollable?: boolean;
    children: ReactElementChild | ReactElementChild[];
  };

export const withPortalBoxVariation = withVariation<PortalBoxProps>('PortalBox')(
  propVariant({
    props: [
      {
        name: 'scrollable',
        default: false,
      },
    ],
    variants: {
      true: {
        BoxComponent: ScrollBox,
      },
      false: {
        BoxComponent: Box,
      },
    },
  })
);
