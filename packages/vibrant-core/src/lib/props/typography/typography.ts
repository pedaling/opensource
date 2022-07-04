import { createSystemProp } from '../../createSystemProp';

const typographySizeProp = createSystemProp({
  property: 'typographySize',
  scale: 'typography.size',
  transform: ({ defaultFontWeight, ...value }) => ({
    ...value,
    fontWeight: defaultFontWeight,
  }),
});

const typographyWeightProp = createSystemProp({
  property: 'typographyWeight',
  styleProperty: 'fontWeight',
  scale: 'typography.weight',
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
  typographySizeProp,
  typographyWeightProp,
  fontStyleProp,
  letterSpacingProp,
  textAlignProp,
  textTransformProp,
];
