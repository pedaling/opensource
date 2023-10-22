import { css } from '@emotion/css';
import type { BoxShadow } from '@vibrant-ui/theme';
import { isDefined } from '@vibrant-ui/utils';
import { createSystemProp } from '../../createSystemProp';

function getBoxShadowValue({ color, offsetX = 0, offsetY = 0, blurRadius = 0, spreadRadius = 0 }: BoxShadow) {
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
  transform: ({ boxShadow }: { boxShadow: BoxShadow[] }) => ({
    boxShadow: [boxShadow],
  }),
});

const boxShadowProp = createSystemProp({
  property: 'boxShadow',
  generateClassName: (shadows: BoxShadow | BoxShadow[]) => [
    css({
      boxShadow: Array.isArray(shadows) ? shadows.map(getBoxShadowValue).join(', ') : getBoxShadowValue(shadows),
    }),
  ],
});

const nativeShadowProp = createSystemProp({
  property: 'nativeShadow',
  disabled: true,
});

export const elevationSystemProps = [elevationLevelProp, boxShadowProp, nativeShadowProp];
