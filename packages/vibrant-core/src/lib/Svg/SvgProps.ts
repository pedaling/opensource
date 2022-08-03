import type { BoxProps } from '../Box';

export type ClipPathProps = BoxProps<undefined, 'clipPath'>;

export type DefsProps = BoxProps<undefined, 'defs'>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export type GProps = BoxProps<undefined, 'g'>;

export type LinearGradientProps = BoxProps<undefined, 'linearGradient'>;

export type MaskProps = BoxProps<undefined, 'mask'>;

export type PathProps = BoxProps<undefined, 'path'>;

export type StopProps = BoxProps<undefined, 'stop'>;

export type SvgProps = Pick<
  BoxProps<undefined, 'svg'>,
  keyof JSX.IntrinsicElements['svg'] | 'children' | 'fill' | 'height' | 'id' | 'width'
>;
