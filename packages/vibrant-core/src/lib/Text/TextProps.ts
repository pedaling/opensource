import type { ReactElementChild, ReactTextChild } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { injectContext } from '../injectContext';
import type {
  ColorSystemProps,
  DisplaySystemProps,
  PositionSystemProps,
  TextSystemProps,
  TypographySystemProps,
} from '../props';
import {
  colorSystemProps,
  displaySystemProps,
  positionSystemProps,
  textSystemProps,
  typographySystemProps,
} from '../props';

type SystemProps = ColorSystemProps &
  DisplaySystemProps &
  PositionSystemProps &
  TextSystemProps &
  TypographySystemProps;

export const systemProps = [
  ...colorSystemProps,
  ...displaySystemProps,
  ...positionSystemProps,
  ...textSystemProps,
  ...typographySystemProps,
];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);

export type TextElements = 'br' | 'h1' | 'h2' | 'h3' | 'h5' | 'h6' | 'label' | 'p' | 'span';

export type TextChildren = ReactElementChild | ReactElementChild[] | ReactTextChild | ReactTextChild[];

export type TextProps = SystemProps & {
  as?: TextElements;
  children?: TextChildren;
};

export const shouldForwardProp = createShouldForwardProp(systemPropNames);

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    textAlign: 'left',
    color: 'onColor',
  })
);
