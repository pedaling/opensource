import type { ResponsiveValue } from '../../types';

export type BorderProps = {
  borderWidth?: ResponsiveValue<number>;
  borderStyle?: ResponsiveValue<'solid' | 'none'>;
  borderColor?: ResponsiveValue<string>;
  borderTopWidth?: ResponsiveValue<number>;
  borderTopStyle?: ResponsiveValue<'solid' | 'none'>;
  borderTopColor?: ResponsiveValue<string>;
  borderRightWidth?: ResponsiveValue<number>;
  borderRightStyle?: ResponsiveValue<'solid' | 'none'>;
  borderRightColor?: ResponsiveValue<string>;
  borderBottomWidth?: ResponsiveValue<number>;
  borderBottomStyle?: ResponsiveValue<'solid' | 'none'>;
  borderBottomColor?: ResponsiveValue<string>;
  borderLeftWidth?: ResponsiveValue<number>;
  borderLeftStyle?: ResponsiveValue<'solid' | 'none'>;
  borderLeftColor?: ResponsiveValue<string>;
  borderRadius?: ResponsiveValue<number | string>;
  borderTopLeftRadius?: ResponsiveValue<number | string>;
  borderTopRightRadius?: ResponsiveValue<number | string>;
  borderBottomLeftRadius?: ResponsiveValue<number | string>;
  borderBottomRightRadius?: ResponsiveValue<number | string>;
  outlineWidth?: ResponsiveValue<number>;
  outlineStyle?: ResponsiveValue<'solid' | 'none'>;
  outlineColor?: ResponsiveValue<string>;
  outlineOffset?: ResponsiveValue<number>;
};
