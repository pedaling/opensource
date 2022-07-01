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

export const backgroundProps = [
  backgroundProp,
  backgroundColorProp,
  backgroundImageProp,
  backgroundSizeProp,
  backgroundPositionProp,
  backgroundRepeatProp,
];
