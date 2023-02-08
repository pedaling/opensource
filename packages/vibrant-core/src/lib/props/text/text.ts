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
});

const wordBreakProp = createSystemProp({
  property: 'wordBreak',
});

const wordWrapProp = createSystemProp({
  property: 'wordWrap',
});

const overflowWrapProp = createSystemProp({
  property: 'overflowWrap',
});

const lineLimitProp = createSystemProp({
  property: 'lineLimit',
  transform: (value: number) => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: value,
  }),
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
