import type { ResponsiveValue } from '../../../types';

export type SizingSystemProps = {
  width?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content'>;
  minWidth?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content'>;
  maxWidth?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content' | 'none'>;
  height?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content'>;
  minHeight?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content'>;
  maxHeight?: ResponsiveValue<number | string | 'auto' | 'fit-content' | 'max-content' | 'min-content' | 'none'>;
  boxSizing?: 'border-box';
};
