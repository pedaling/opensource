import type { ResponsiveValue } from '../../types';

export type SizingProps = {
  width?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | string | number>;
  minWidth?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | string | number>;
  maxWidth?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string | number>;
  height?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | string | number>;
  minHeight?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | string | number>;
  maxHeight?: ResponsiveValue<'auto' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string | number>;
};
