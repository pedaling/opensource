import { createSystemProp } from '../../createSystemProp';

const widthProp = createSystemProp({
  property: 'width',
});

const minWidthProp = createSystemProp({
  property: 'minWidth',
});

const maxWidthProp = createSystemProp({
  property: 'maxWidth',
});

const heightProp = createSystemProp({
  property: 'height',
});

const minHeightProp = createSystemProp({
  property: 'minHeight',
});

const maxHeightProp = createSystemProp({
  property: 'maxHeight',
});

const boxSizingProp = createSystemProp({
  property: 'boxSizing',
});

const aspectRatioProp = createSystemProp({
  property: 'aspectRatio',
  transform: (value: number | string) => ({
    aspectRatio: value ? value.toString() : value,
  }),
});

export const sizingSystemProps = [
  widthProp,
  minWidthProp,
  maxWidthProp,
  heightProp,
  minHeightProp,
  maxHeightProp,
  boxSizingProp,
  aspectRatioProp,
];
