export type TypographyWeight = 'bold' | 'extraBold' | 'medium' | 'regular';

export type TypographyKind =
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4'
  | 'body5'
  | 'body6'
  | 'display1'
  | 'display2'
  | 'display3'
  | 'display4'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'title4'
  | 'title5'
  | 'title6'
  | 'title7';

type TypographyStyle = {
  fontSize: number | string;
  lineHeight: number | string;
};

export type ThemeTypography = {
  [key in TypographyKind]: TypographyStyle;
};

export type ThemeTypographyWeight = {
  [key in TypographyWeight]: {
    fontWeight: string;
    fontFamily?: string;
  };
};
