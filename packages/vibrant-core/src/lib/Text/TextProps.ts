import type { ReactElementChild, ReactTextChild } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { injectContext } from '../injectContext';
import type {
  ColorSystemProps,
  DisplaySystemProps,
  FlexboxSystemProps,
  PositionSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TextSystemProps,
  TypographySystemProps,
} from '../props';
import {
  colorSystemProps,
  displaySystemProps,
  flexboxSystemProps,
  positionSystemProps,
  sizingSystemProps,
  spacingSystemProps,
  textSystemProps,
  typographySystemProps,
} from '../props';

type SystemProps = ColorSystemProps &
  DisplaySystemProps &
  Pick<FlexboxSystemProps, 'alignSelf' | 'flex' | 'flexBasis' | 'flexGrow' | 'flexShrink'> &
  PositionSystemProps &
  SpacingSystemProps &
  TextSystemProps &
  TypographySystemProps &
  SizingSystemProps;

export const systemProps = [
  ...colorSystemProps,
  ...displaySystemProps,
  ...flexboxSystemProps,
  ...positionSystemProps,
  ...spacingSystemProps,
  ...textSystemProps,
  ...typographySystemProps,
  ...sizingSystemProps,
];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);

export type TextElements = 'br' | 'h1' | 'h2' | 'h3' | 'h5' | 'h6' | 'label' | 'p' | 'span';

export type TextChildren = ReactElementChild | ReactTextChild | TextChildren[];

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
