import type { Ref } from 'react';
import type { ReactElementChildren } from '../../types';
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
import { scrollSystemProps } from './props';
import type { ScrollSystemProps } from './props/type';

type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  FlexboxSystemProps &
  PositionSystemProps &
  SizingSystemProps &
  SpacingSystemProps &
  TransformSystemProps &
  ScrollSystemProps;

const systemProps = [
  ...scrollSystemProps,
  ...backgroundSystemProps,
  ...borderSystemProps,
  ...colorSystemProps,
  ...overflowSystemProps,
  ...displaySystemProps,
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
  children: ReactElementChildren;
} & SystemProps;

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    boxSizing: 'border-box',
    overflowY: isNative ? undefined : 'auto',
  })
);

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
