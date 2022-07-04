export type TypographyWeight = 'regular' | 'medium' | 'bold' | 'extraBold';

type TypographyStyle = {
  fontFamily: string;
  fontSize: number | string;
  fontWeight: TypographyWeight;
  lineHeight: number | string;
};

export type TypographySize =
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

export type ThemeTypography = {
  size: {
    [key in TypographySize]: TypographyStyle;
  };
  weight: {
    [key in TypographyWeight]: number;
  };
};
