/* eslint-disable @typescript-eslint/naming-convention */
import type { FC } from 'react';
import type {
  ClipPath as RNClipPath,
  Defs as RNDefs,
  G as RNG,
  LinearGradient as RNLinearGradient,
  Mask as RNMask,
  Path as RNPath,
  Stop as RNStop,
  Svg as RNSvg,
} from 'react-native-svg';
import type { BoxProps } from '../Box';
import type { SystemProps } from '../props';

export type ClipPathProps = Omit<BoxProps<typeof RNClipPath>, 'ref'>;

export type DefsProps = Omit<BoxProps<typeof RNDefs>, 'ref'>;

export type GProps = Omit<BoxProps<typeof RNG>, 'ref'>;

export type LinearGradientProps = Omit<BoxProps<typeof RNLinearGradient>, 'ref'>;

export type MaskProps = Omit<BoxProps<typeof RNMask>, 'ref'>;

export type PathProps = Omit<BoxProps<typeof RNPath>, 'ref'>;

export type StopProps = Omit<BoxProps<typeof RNStop>, 'ref'>;

export type SvgProps = Omit<BoxProps<typeof RNSvg>, Exclude<keyof SystemProps, 'fill' | 'height' | 'width'> | 'ref'>;

export type SvgComponentType = FC<SvgProps> & {
  ClipPath: FC<ClipPathProps>;
  Defs: FC<DefsProps>;
  G: FC<GProps>;
  LinearGradient: FC<LinearGradientProps>;
  Mask: FC<MaskProps>;
  Path: FC<PathProps>;
  Stop: FC<StopProps>;
};
