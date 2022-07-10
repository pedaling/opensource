import { createSystemProp } from '../../createSystemProp';

const transformRem = (value: any) => {
  if (typeof value === 'string' && value.endsWith('rem')) {
    return parseInt(value.replace('rem', ''), 10) * 16;
  }

  return value;
};

const typographyProp = createSystemProp({
  property: 'typography',
  scale: 'typography',
  transform: value => ({
    ...value,
  }),
  shouldInterpolation: true,
});

const fontFamilyProp = createSystemProp({
  property: 'fontFamily',
});

const fontSizeProp = createSystemProp({
  property: 'fontSize',
  transform: value => ({ fontSize: transformRem(value) }),
});

const lineHeightProp = createSystemProp({
  property: 'lineHeight',
  transform: value => ({ lineHeight: transformRem(value) }),
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
  disabled: true,
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
