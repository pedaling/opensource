import { createSystemProp } from '../../createSystemProp';

const widthProp = createSystemProp({
  property: 'width',
});

const minWidthProp = createSystemProp({
  property: 'minWidth',
  transform: value => ({
    minWidth: value === 'unset' ? undefined : value,
  }),
});

const maxWidthProp = createSystemProp({
  property: 'maxWidth',
  transform: value => ({
    maxWidth: value === 'unset' ? undefined : value,
  }),
});

const heightProp = createSystemProp({
  property: 'height',
});

const minHeightProp = createSystemProp({
  property: 'minHeight',
  transform: value => ({
    minHeight: value === 'unset' ? undefined : value,
  }),
});

const maxHeightProp = createSystemProp({
  property: 'maxHeight',
  transform: value => ({
    maxHeight: value === 'unset' ? undefined : value,
  }),
});

const boxSizingProp = createSystemProp({
  property: 'boxSizing',
});

const aspectRatioProp = createSystemProp({
  property: 'aspectRatio',
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
