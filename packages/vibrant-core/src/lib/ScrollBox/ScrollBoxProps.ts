import type { Ref } from 'react';
import type { ScrollViewProps } from 'react-native';
import type { ReactElementChildren, ResponsiveValue } from '../../types';
import type { BoxElements, LayoutEvent } from '../Box';
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
  ScrollItemSystemProps,
  ScrollSystemProps,
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
  scrollSystemProps,
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
  TransformSystemProps &
  ScrollSystemProps &
  ScrollItemSystemProps;

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
  ...scrollSystemProps,
];

const systemPropNames = systemProps.filter(systemProp => !systemProp.disabled).map(systemProp => systemProp.propName);

export type ScrollBoxProps = {
  ref?: Ref<any>;
  as?: BoxElements;
  children: ReactElementChildren;
  scrollEnabled?: ResponsiveValue<boolean>;
  onLayout?: (layoutEvent: LayoutEvent) => void;
} & SystemProps &
  Pick<ScrollViewProps, 'keyboardShouldPersistTaps'> & {
    ariaLabel?: string;
    ariaChecked?: boolean;
    ariaLabelledBy?: string;
    ariaCurrent?: 'date' | 'location' | 'page' | 'step' | 'time' | 'true';
    ariaSelected?: boolean;
  };

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
