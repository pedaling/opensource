import type { ResponsiveValue } from '../../types';

export type BorderProps = {
  borderWidth?: ResponsiveValue<number>;
  borderStyle?: ResponsiveValue<'none' | 'solid'>;
  borderColor?: ResponsiveValue<string>;
  borderTopWidth?: ResponsiveValue<number>;
  borderTopStyle?: ResponsiveValue<'none' | 'solid'>;
  borderTopColor?: ResponsiveValue<string>;
  borderRightWidth?: ResponsiveValue<number>;
  borderRightStyle?: ResponsiveValue<'none' | 'solid'>;
  borderRightColor?: ResponsiveValue<string>;
  borderBottomWidth?: ResponsiveValue<number>;
  borderBottomStyle?: ResponsiveValue<'none' | 'solid'>;
  borderBottomColor?: ResponsiveValue<string>;
  borderLeftWidth?: ResponsiveValue<number>;
  borderLeftStyle?: ResponsiveValue<'none' | 'solid'>;
  borderLeftColor?: ResponsiveValue<string>;
  borderRadius?: ResponsiveValue<number | string>;
  borderTopLeftRadius?: ResponsiveValue<number | string>;
  borderTopRightRadius?: ResponsiveValue<number | string>;
  borderBottomLeftRadius?: ResponsiveValue<number | string>;
  borderBottomRightRadius?: ResponsiveValue<number | string>;
  outlineWidth?: ResponsiveValue<number>;
  outlineStyle?: ResponsiveValue<'none' | 'solid'>;
  outlineColor?: ResponsiveValue<string>;
  outlineOffset?: ResponsiveValue<number>;
};
