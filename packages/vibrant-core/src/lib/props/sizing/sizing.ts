import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const widthProp = createSystemProp({
  property: 'width',
  generateClassName: (value: number) => [
    css({
      width: value,
    }),
  ],
});

const minWidthProp = createSystemProp({
  property: 'minWidth',
});

const maxWidthProp = createSystemProp({
  property: 'maxWidth',
});

const heightProp = createSystemProp({
  property: 'height',
  generateClassName: (value: number) => [
    css({
      height: value,
    }),
  ],
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
  generateClassName: (value: number) => [
    css({
      aspectRatio: value ? value.toString() : value,
    }),
  ],
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
