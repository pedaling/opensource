import { createSystemProp } from '../../createSystemProp';

const typographyProp = createSystemProp({
  property: 'typography',
  scale: 'typography',
  transform: ({ defaultFontWeight, ...value }) => ({
    ...value,
    fontWeight: defaultFontWeight,
  }),
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

export const typographyProps = [
  typographyProp,
  fontWeightProp,
  fontStyleProp,
  letterSpacingProp,
  textAlignProp,
  textTransformProp,
];
