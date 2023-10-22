import { css } from '@emotion/css';
import type { AnyGradient, LinearGradient } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';

const backgroundProp = createSystemProp({
  property: 'background',
  scale: 'colors',
});

const backgroundColorProp = createSystemProp({
  property: 'backgroundColor',
  scale: 'colors',
});

const backgroundImageProp = createSystemProp({
  property: 'backgroundImage',
});

const backgroundSizeProp = createSystemProp({
  property: 'backgroundSize',
});

const backgroundPositionProp = createSystemProp({
  property: 'backgroundPosition',
});

const backgroundRepeatProp = createSystemProp({
  property: 'backgroundRepeat',
});

const gradientProp = createSystemProp({
  property: 'gradient',
  scale: 'gradient',
  shouldInterpolation: 'after',
  generateClassName: ({ type, ...value }: AnyGradient) => {
    if (type === 'linear') {
      return [
        css({
          linearGradient: value,
        }),
      ];
    }

    return [];
  },
});

const linearGradientProp = createSystemProp({
  property: 'linearGradient',
  generateClassName: ({ colors, locations, degree }: LinearGradient) => [
    css({
      background: `linear-gradient(${degree}deg, ${colors
        .map((color, index) => `${color} ${locations[index]}%`)
        .join(', ')})`,
    }),
  ],
});

const backdropBlurRadiusProp = createSystemProp({
  property: 'backdropBlurRadius',
  generateClassName: value => [
    css({
      backdropFilter: `blur(${value}px)`,
    }),
  ],
});

export const backgroundSystemProps = [
  backgroundProp,
  backgroundColorProp,
  backgroundImageProp,
  backgroundSizeProp,
  backgroundPositionProp,
  backgroundRepeatProp,
  gradientProp,
  linearGradientProp,
  backdropBlurRadiusProp,
];
