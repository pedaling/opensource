import type { SVGProps } from 'react';
import type { BoxProps } from '../Box';

export type BaseSvgProps = Omit<
  SVGProps<SVGElement>,
  keyof BoxProps<undefined, 'clipPath' | 'defs' | 'g' | 'linearGradient' | 'mark' | 'path' | 'stop' | 'svg'>
> & { fill?: string; id?: string };

export type SvgProps = Omit<BaseSvgProps, 'fill'> &
  Pick<BoxProps, 'children' | 'fill' | 'height' | 'id' | 'opacity' | 'width'>;
