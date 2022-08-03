import type { Shadow } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

function getBoxShadowValue({ color, offsetX = 0, offsetY = 0, blurRadius = 0, spreadRadius = 0 }: Shadow) {
  return [offsetX, offsetY, blurRadius, spreadRadius, color]
    .reduce((style: string, value) => {
      if (!isDefined(value)) {
        return style;
      }

      return `${style} ${value}${typeof value === 'number' ? 'px' : ''}`;
    }, '')
    .trim();
}

const elevationLevelProp = createSystemProp({
  property: 'elevationLevel',
  scale: 'elevation',
  shouldInterpolation: 'after',
  transform: (value: Shadow[]) => ({
    boxShadow: [value],
  }),
});

const boxShadowProp = createSystemProp({
  property: 'boxShadow',
  transform: (shadows: Shadow | Shadow[]) => ({
    boxShadow: Array.isArray(shadows) ? shadows.map(getBoxShadowValue).join(', ') : getBoxShadowValue(shadows),
  }),
});

export const elevationProps = [elevationLevelProp, boxShadowProp];
