/* eslint-disable @typescript-eslint/naming-convention */
import type { FC, ReactNode, SVGProps } from 'react';
import type { BoxProps } from '@vibrant-ui/core';
import { Box } from '@vibrant-ui/core';
import { isDefined } from '@vibrant-ui/utils';

type BaseSvgProps = Omit<
  SVGProps<SVGElement>,
  keyof BoxProps<unknown, 'svg' | 'path' | 'mark' | 'g' | 'defs' | 'clipPath' | 'linearGradient' | 'stop'>
> & { children?: ReactNode; fill?: string; id?: string };

export type SvgProps = Omit<BaseSvgProps, 'fill'> &
  Pick<BoxProps, 'className' | 'width' | 'fill' | 'height' | 'id' | 'opacity'>;

const Path: FC<BaseSvgProps> = props => <Box as="path" {...props} />;

const Mask: FC<BaseSvgProps> = props => <Box as="mask" {...props} />;

const G: FC<BaseSvgProps> = props => <Box as="g" {...props} />;

const Defs: FC<BaseSvgProps> = props => <Box as="defs" {...props} />;

const ClipPath: FC<BaseSvgProps> = props => <Box as="clipPath" {...props} />;

const LinearGradient: FC<BaseSvgProps> = props => <Box as="linearGradient" {...props} />;

const Stop: FC<BaseSvgProps> = props => <Box as="stop" {...props} />;

export const Svg: FC<SvgProps> & {
  G: FC<BaseSvgProps>;
  Mask: FC<BaseSvgProps>;
  Path: FC<BaseSvgProps>;
  Defs: FC<BaseSvgProps>;
  ClipPath: FC<BaseSvgProps>;
  LinearGradient: FC<BaseSvgProps>;
  Stop: FC<BaseSvgProps>;
} = ({ width, height, className, ...restProps }) => (
  <Box as="span" display="inline-flex" width={width || 'auto'} height={height || 'auto'} className={className}>
    <Box
      as="svg"
      display="inline-flex"
      width={isDefined(width) && width !== 'auto' ? '100%' : 'auto'}
      height={isDefined(height) && height !== 'auto' ? '100%' : 'auto'}
      {...restProps}
    />
  </Box>
);

Svg.Mask = Mask;

Svg.G = G;

Svg.Path = Path;

Svg.Defs = Defs;

Svg.ClipPath = ClipPath;

Svg.LinearGradient = LinearGradient;

Svg.Stop = Stop;
