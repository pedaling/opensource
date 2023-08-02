export type BorderRadiusLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type Rounded = 'full' | 'lg' | 'md' | 'none' | 'sm' | 'xl' | 'xxl';

export type ThemeBorderRadius = {
  [key in BorderRadiusLevel | Rounded]: number;
};
