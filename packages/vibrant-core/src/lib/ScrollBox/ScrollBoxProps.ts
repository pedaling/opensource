import type { Ref } from 'react';
import type { ReactElementChild, ResponsiveValue } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { injectContext } from '../injectContext';
import { isNative } from '../isNative';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  FlexboxSystemProps,
  PositionSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TransformSystemProps,
} from '../props';
import {
  backgroundSystemProps,
  borderSystemProps,
  colorSystemProps,
  displaySystemProps,
  flexboxSystemProps,
  overflowSystemProps,
  positionSystemProps,
  sizingSystemProps,
  spacingSystemProps,
  transformSystemProps,
} from '../props';

type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  FlexboxSystemProps &
  PositionSystemProps &
  SizingSystemProps &
  SpacingSystemProps &
  TransformSystemProps;

const systemProps = [
  ...backgroundSystemProps,
  ...borderSystemProps,
  ...colorSystemProps,
  ...displaySystemProps,
  ...overflowSystemProps,
  ...flexboxSystemProps,
  ...positionSystemProps,
  ...spacingSystemProps,
  ...sizingSystemProps,
  ...transformSystemProps,
];

const systemPropNames = systemProps.filter(systemProp => !systemProp.disabled).map(systemProp => systemProp.propName);

export type ScrollBoxElements =
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'header'
  | 'li'
  | 'main'
  | 'nav'
  | 'section'
  | 'span'
  | 'ul';

export type ScrollBoxProps = {
  ref?: Ref<any>;
  as?: ScrollBoxElements;
  alwaysShowScroll?: ResponsiveValue<boolean>;
  hideScroll?: ResponsiveValue<boolean>;
  children: ReactElementChild | ReactElementChild[];
} & SystemProps;

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    boxSizing: 'border-box',
    overflow: isNative ? undefined : 'auto',
  })
);

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
