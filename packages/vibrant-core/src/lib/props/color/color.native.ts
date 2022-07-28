import { deg } from 'react-native-linear-gradient-degree';
import type { AnyGradient, LinearGradient } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';
import { ExternalComponent } from '../../ExternalComponent';

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
    BaseComponent: ExternalComponent,
    props: {
      name: 'nativeLinearGradient',
      colors,
      locations: locations.map(location => location / 100),
      ...deg(degree),
    },
  }),
});

export const colorProps = [colorProp, fillProp, strokeProp, gradientProp, linearGradientProp];
