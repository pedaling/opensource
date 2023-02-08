import { createSystemProp } from '../../createSystemProp';

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
    props: {
      numberOfLines: value,
      lineBreakMode: 'tail',
    },
  }),
});

const overflowWrapProp = createSystemProp({
  property: 'overflowWrap',
  disabled: true,
});

const textDecorationLineProp = createSystemProp({
  property: 'textDecorationLine',
});

export const textSystemProps = [
  letterSpacingProp,
  textAlignProp,
  textTransformProp,
  whiteSpaceProp,
  wordBreakProp,
  wordWrapProp,
  lineLimitProp,
  overflowWrapProp,
  textDecorationLineProp,
];
