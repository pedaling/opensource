import { createSystemProp } from '../../createSystemProp';

const fontFamilyProp = createSystemProp({
  property: 'fontFamily',
});

const fontSizeProp = createSystemProp({
  property: 'fontSize',
});

const fontStyleProp = createSystemProp({
  property: 'fontStyle',
});

const fontWeightProp = createSystemProp({
  property: 'fontWeight',
});

const lineHeightProp = createSystemProp({
  property: 'lineHeight',
});

const letterSpacingProp = createSystemProp({
  property: 'letterSpacing',
});

const textAlignProp = createSystemProp({
  property: 'textAlign',
});

const textTransformProp = createSystemProp({
  property: 'textTransform',
});

export const typographyProps = [
  fontFamilyProp,
  fontSizeProp,
  fontStyleProp,
  fontWeightProp,
  lineHeightProp,
  letterSpacingProp,
  textAlignProp,
  textTransformProp,
];
