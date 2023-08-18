import type { Shadow } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';
import { ExternalComponent } from '../../ExternalComponent';

function getBoxShadowValue({ color, offsetX = 0, offsetY = 0, distance = 0 }: Shadow) {
  return {
    startColor: color,
    offset: [offsetX, offsetY],
    distance,
  };
}

const elevationLevelProp = createSystemProp({
  property: 'elevationLevel',
  scale: 'elevation',
  shouldInterpolation: 'after',
  transform: ({ nativeShadow }: { nativeShadow: Shadow[] }) => ({
    nativeShadow: [nativeShadow],
  }),
});

const boxShadowProp = createSystemProp({
  property: 'boxShadow',
  disabled: true,
});

const nativeShadowProp = createSystemProp({
  property: 'nativeShadow',
  transform: (shadows: Shadow | Shadow[]) => ({
    BaseComponent: ExternalComponent,
    props: {
      name: 'nativeShadows',
      shadows: [shadows].flat().map(getBoxShadowValue),
    },
  }),
});

export const elevationSystemProps = [elevationLevelProp, boxShadowProp, nativeShadowProp];
