import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';
import type { TextShadow } from './type';

function getTextShadowValue({ color, offsetX = 0, offsetY = 0, blurRadius = 0 }: TextShadow) {
  return [offsetX, offsetY, blurRadius, color]
    .reduce((style: string, value) => {
      if (!isDefined(value)) {
        return style;
      }

      return `${style} ${value}${typeof value === 'number' ? 'px' : ''}`;
    }, '')
    .trim();
}

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

const textShadowProp = createSystemProp({
  property: 'textShadow',
  transform: (textShadow: TextShadow) => ({
    textShadow: getTextShadowValue(textShadow),
  }),
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
  textShadowProp,
];
