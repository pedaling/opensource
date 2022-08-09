import type { AnyGradient, LinearGradient } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
});

const fillProp = createSystemProp({
  property: 'fill',
  scale: 'colors',
});

const strokeProp = createSystemProp({
  property: 'stroke',
  scale: 'colors',
});

const gradientProp = createSystemProp({
  property: 'gradient',
  scale: 'gradient',
  shouldInterpolation: 'after',
  transform: ({ type, ...value }: AnyGradient) => {
    if (type === 'linear') {
      return {
        linearGradient: value,
      };
    }

    return {};
  },
});

const linearGradientProp = createSystemProp({
  property: 'linearGradient',
  transform: ({ colors, locations, degree }: LinearGradient) => ({
    background: `linear-gradient(${degree}deg, ${colors
      .map((color, index) => `${color} ${locations[index]}%`)
      .join(', ')})`,
  }),
});

export const colorSystemProps = [colorProp, fillProp, strokeProp, gradientProp, linearGradientProp];
