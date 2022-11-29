import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { BoxProps } from '../Box';
import { withVariation } from '../withVariation';

type PortalBoxProps = DistributiveOmit<BoxProps, 'position'> & {
  onMount?: () => void;
  scrollable?: boolean;
};

export const withPortalBoxVariation = withVariation<PortalBoxProps>('PortalBox')();
