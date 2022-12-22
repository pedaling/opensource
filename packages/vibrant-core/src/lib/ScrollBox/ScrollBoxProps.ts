import type { Ref } from 'react';
import type { ScrollViewProps } from 'react-native';
import type { ReactElementChildren, ResponsiveValue } from '../../types';
import type { BoxElements } from '../Box';
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

export type ScrollBoxProps = {
  ref?: Ref<any>;
  as?: BoxElements;
  children: ReactElementChildren;
  scrollEnabled?: ResponsiveValue<boolean>;
} & SystemProps &
  Pick<ScrollViewProps, 'keyboardShouldPersistTaps'>;

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: isNative ? undefined : 'auto',
  })
);

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
