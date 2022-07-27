export type BorderRadiusLevel = 0 | 1 | 2 | 3 | 4;

export type ThemeBorderRadius = {
  [key in BorderRadiusLevel]: number;
};
