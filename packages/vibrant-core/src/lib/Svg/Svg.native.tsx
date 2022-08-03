/* eslint-disable @typescript-eslint/naming-convention */
import type { FC } from 'react';
import {
  ClipPath as RNClipPath,
  Defs as RNDefs,
  G as RNG,
  LinearGradient as RNLinearGradient,
  Mask as RNMask,
  Path as RNPath,
  Stop as RNStop,
  Svg as RNSvg,
} from 'react-native-svg';
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

const ClipPath: FC<ClipPathProps> = props => <Box base={RNClipPath} {...props} />;

const Defs: FC<DefsProps> = props => <Box base={RNDefs} {...props} />;

const G: FC<GProps> = props => <Box base={RNG} {...props} />;

const LinearGradient: FC<LinearGradientProps> = props => <Box base={RNLinearGradient} {...props} />;

const Mask: FC<MaskProps> = props => <Box base={RNMask} {...props} />;

const Path: FC<PathProps> = props => <Box base={RNPath} {...props} />;

const Stop: FC<StopProps> = props => <Box base={RNStop} {...props} />;

export const Svg: SvgComponentType = ({ width, height, ...restProps }) => (
  <Box base={RNSvg} width={width || 'auto'} height={height || 'auto'} {...restProps}></Box>
);

Svg.ClipPath = ClipPath;

Svg.Defs = Defs;

Svg.G = G;

Svg.LinearGradient = LinearGradient;

Svg.Mask = Mask;

Svg.Path = Path;

Svg.Stop = Stop;
