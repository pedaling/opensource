import { deg } from 'react-native-linear-gradient-degree';
import type { AnyGradient, LinearGradient } from '@vibrant-ui/theme';
import { createSystemProp } from '../../createSystemProp';
import { ExternalComponent } from '../../ExternalComponent';

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

export const backgroundSystemProps = [
  backgroundProp,
  backgroundColorProp,
  backgroundImageProp,
  backgroundSizeProp,
  backgroundPositionProp,
  backgroundRepeatProp,
  gradientProp,
  linearGradientProp,
];
