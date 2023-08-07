export type Rounded = 'full' | 'lg' | 'md' | 'none' | 'sm' | 'xl' | 'xxl';

export type ThemeBorderRadius = {
  [key in Rounded]: number;
};
