/* eslint-disable @typescript-eslint/naming-convention */
import type { FC } from 'react';
import { Box } from '../Box';
import type {
  ClipPathProps,
  DefsProps,
  GProps,
  LinearGradientProps,
  MaskProps,
  PathProps,
  StopProps,
  SvgComponentType,
} from './SvgProps';

const ClipPath: FC<ClipPathProps> = props => <Box as="clipPath" {...props} />;

const Defs: FC<DefsProps> = props => <Box as="defs" {...props} />;

const G: FC<GProps> = props => <Box as="g" {...props} />;

const LinearGradient: FC<LinearGradientProps> = props => <Box as="linearGradient" {...props} />;

const Mask: FC<MaskProps> = props => <Box as="mask" {...props} />;

const Path: FC<PathProps> = props => <Box as="path" {...props} />;

const Stop: FC<StopProps> = props => <Box as="stop" {...props} />;

export const Svg: SvgComponentType = ({ width, height, ...restProps }) => (
  <Box as="svg" width={width || 'auto'} height={height || 'auto'} {...restProps} />
);

Svg.ClipPath = ClipPath;

Svg.Defs = Defs;

Svg.G = G;

Svg.LinearGradient = LinearGradient;

Svg.Mask = Mask;

Svg.Path = Path;

Svg.Stop = Stop;
