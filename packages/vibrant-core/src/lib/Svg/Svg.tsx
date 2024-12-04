/* eslint-disable @typescript-eslint/naming-convention */
import { type FC, memo } from 'react';
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

const ClipPath: FC<ClipPathProps> = memo(props => <Box as="clipPath" {...props} />);

ClipPath.displayName = 'ClipPath';

const Defs: FC<DefsProps> = memo(props => <Box as="defs" {...props} />);

Defs.displayName = 'Defs';

const G: FC<GProps> = memo(props => <Box as="g" {...props} />);

G.displayName = 'G';

const LinearGradient: FC<LinearGradientProps> = props => <Box as="linearGradient" {...props} />;

LinearGradient.displayName = 'LinearGradient';

const Mask: FC<MaskProps> = memo(props => <Box as="mask" {...props} />);

Mask.displayName = 'Mask';

const Path: FC<PathProps> = memo(props => <Box as="path" {...props} />);

Path.displayName = 'Path';

const Stop: FC<StopProps> = memo(props => <Box as="stop" {...props} />);

Stop.displayName = 'Stop';

const Circle: FC<CircleProps> = memo(props => <Box as="circle" {...props} />);

Circle.displayName = 'Circle';

const SvgFc: FC<SvgProps> = memo(props => <Box as="svg" {...props} />);

SvgFc.displayName = 'Svg';

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
