import type { Shadow } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';
import { ExternalComponent } from '../../ExternalComponent';

function getBoxShadowValue({ color, offsetX = 0, offsetY = 0, blurRadius = 0 }: Shadow) {
  return {
    startColor: color,
    offset: [offsetX, offsetY],
    distance: blurRadius,
  };
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
    BaseComponent: ExternalComponent,
    props: {
      name: 'nativeShadows',
      shadows: [shadows].flat().map(({ color, offsetX, offsetY, blurRadius }) =>
        getBoxShadowValue({
          color,
          offsetX,
          offsetY,
          blurRadius,
        })
      ),
    },
  }),
});

export const elevationSystemProps = [elevationLevelProp, boxShadowProp];
