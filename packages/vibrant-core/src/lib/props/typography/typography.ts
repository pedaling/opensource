import { createSystemProp } from '../../createSystemProp';

const typographyProp = createSystemProp({
  property: 'typography',
  scale: 'typography',
  transform: value => ({
    ...value,
  }),
  shouldInterpolation: 'after',
});

const fontFamilyProp = createSystemProp({
  property: 'fontFamily',
});

const fontSizeProp = createSystemProp({
  property: 'fontSize',
});

const lineHeightProp = createSystemProp({
  property: 'lineHeight',
});

const fontWeightProp = createSystemProp({
  property: 'fontWeight',
  scale: 'typographyWeight',
});

const fontStyleProp = createSystemProp({
  property: 'fontStyle',
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

const whiteSpaceProp = createSystemProp({
  property: 'whiteSpace',
});

export const typographyProps = [
  typographyProp,
  fontWeightProp,
  fontStyleProp,
  letterSpacingProp,
  textAlignProp,
  textTransformProp,
  fontFamilyProp,
  lineHeightProp,
  fontSizeProp,
  whiteSpaceProp,
];
