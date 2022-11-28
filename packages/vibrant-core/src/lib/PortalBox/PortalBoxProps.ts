import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { BoxProps } from '../Box';
import { Box } from '../Box';

import { propVariant } from '../propVariant';
import { ScrollBox } from '../ScrollBox';
import { withVariation } from '../withVariation';

type PortalBoxProps = DistributiveOmit<BoxProps, 'position' | 'web_position'> & {
  onMount?: () => void;
  scrollable?: boolean;
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
