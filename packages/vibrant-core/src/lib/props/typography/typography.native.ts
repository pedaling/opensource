import { Text } from 'react-native';
import { createSystemProp } from '../../createSystemProp';

const transformRem = (value: any) => {
  if (typeof value === 'string' && value.endsWith('rem')) {
    return parseFloat(value.replace('rem', '')) * 16;
  }

  return value;
};

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

const wordBreakProp = createSystemProp({
  property: 'wordBreak',
  disabled: true,
});

const wordWrapProp = createSystemProp({
  property: 'wordWrap',
  disabled: true,
});

const lineLimitProp = createSystemProp({
  property: 'lineLimit',
  transform: value => ({
    BaseComponent: Text,
    props: {
      numberOfLines: value,
      lineBreakMode: 'tail',
    },
  }),
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
  wordBreakProp,
  wordWrapProp,
  lineLimitProp,
];
