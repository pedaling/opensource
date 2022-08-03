/* eslint-disable @typescript-eslint/naming-convention */
import type { FC } from 'react';
import { Box } from '../Box';
import type { BaseSvgProps, SvgProps } from './SvgProps';

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
} = ({ width, height, ...restProps }) => (
  <Box as="svg" display="inline-flex" width={width || 'auto'} height={height || 'auto'} {...restProps} />
);

Svg.Mask = Mask;

Svg.G = G;

Svg.Path = Path;

Svg.Defs = Defs;

Svg.ClipPath = ClipPath;

Svg.LinearGradient = LinearGradient;

Svg.Stop = Stop;
