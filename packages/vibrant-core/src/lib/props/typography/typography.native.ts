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

const fontWeightProp = createSystemProp({
  property: 'fontWeight',
  scale: 'typographyWeight',
  transform: value => ({
    ...value,
  }),
});

const fontStyleProp = createSystemProp({
  property: 'fontStyle',
});

const lineHeightProp = createSystemProp({
  property: 'lineHeight',
  transform: value => ({ lineHeight: transformRem(value) }),
});

export const typographySystemProps = [
  typographyProp,
  fontFamilyProp,
  fontSizeProp,
  fontWeightProp,
  fontStyleProp,
  lineHeightProp,
];
