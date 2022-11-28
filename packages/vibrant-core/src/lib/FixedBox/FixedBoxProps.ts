import type { DistributiveOmit } from '@vibrant-ui/utils';
import type { BoxProps } from '../Box';
import { withVariation } from '../withVariation';

type FixedBoxProps = DistributiveOmit<BoxProps, 'position' | 'web_position'>;

export const withFixedBoxVariation = withVariation<FixedBoxProps>('FixedBox')();
