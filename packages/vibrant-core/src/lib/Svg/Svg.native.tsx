/* eslint-disable @typescript-eslint/naming-convention */
import { type FC, memo } from 'react';
import {
  Circle as RNCircle,
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
  CircleProps,
  ClipPathProps,
  DefsProps,
  GProps,
  LinearGradientProps,
  MaskProps,
  PathProps,
  StopProps,
  SvgComponentType,
  SvgProps,
} from './SvgProps';

const ClipPath: FC<ClipPathProps> = memo(props => <Box base={RNClipPath} {...props} />);

ClipPath.displayName = 'ClipPath';

const Defs: FC<DefsProps> = memo(props => <Box base={RNDefs} {...props} />);

Defs.displayName = 'Defs';

const G: FC<GProps> = memo(props => <Box base={RNG} {...props} />);

G.displayName = 'G';

const LinearGradient: FC<LinearGradientProps> = memo(props => <Box base={RNLinearGradient} {...props} />);

LinearGradient.displayName = 'LinearGradient';

const Mask: FC<MaskProps> = memo(props => <Box base={RNMask} {...props} />);

Mask.displayName = 'Mask';

const Path: FC<PathProps> = memo(props => <Box base={RNPath} {...props} />);

Path.displayName = 'Path';

const Stop: FC<StopProps> = memo(props => <Box base={RNStop} {...props} />);

Stop.displayName = 'Stop';

const Circle: FC<CircleProps> = memo(props => <Box base={RNCircle} {...props} />);

Circle.displayName = 'Circle';

const SvgFc: FC<SvgProps> = memo(({ width, height, ...restProps }) => (
  <Box base={RNSvg} width={width || 'auto'} height={height || 'auto'} {...restProps} />
));

export const Svg: SvgComponentType = Object.assign(SvgFc, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Stop,
  Circle,
});
