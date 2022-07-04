export type TypographyWeight = 'regular' | 'medium' | 'bold' | 'extraBold';

export type TypographyKind =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6'
  | 'title7'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3';

type TypographyStyle = {
  fontFamily: string;
  fontSize: number | string;
  defaultFontWeight: TypographyWeight;
  lineHeight: number | string;
};

export type ThemeTypography = {
  [key in TypographyKind]: TypographyStyle;
};

export type ThemeTypographyWeight = {
  [key in TypographyWeight]: number;
};
