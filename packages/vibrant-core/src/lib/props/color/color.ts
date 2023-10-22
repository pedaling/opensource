import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const colorProp = createSystemProp({
  property: 'color',
  scale: 'colors',
  generateClassName: (value: string) => [css({ color: value }), css({ textFillcolor: value })],
});

export const colorSystemProps = [colorProp];
