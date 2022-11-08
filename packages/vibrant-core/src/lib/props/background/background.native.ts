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
  disabled: true,
});

const backgroundSizeProp = createSystemProp({
  property: 'backgroundSize',
  disabled: true,
});

const backgroundPositionProp = createSystemProp({
  property: 'backgroundPosition',
  disabled: true,
});

const backgroundRepeatProp = createSystemProp({
  property: 'backgroundRepeat',
  disabled: true,
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

const backdropBlurRadiusProp = createSystemProp({
  property: 'backdropBlurRadius',
  disabled: true,
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
