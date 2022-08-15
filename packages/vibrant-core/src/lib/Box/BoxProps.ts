import type { ComponentType, Ref } from 'react';
import type { DistributiveOmit, LayoutEvent } from '@vibrant-ui/utils';
import type { ReactElementChild } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  ElevationSystemProps,
  FlexboxSystemProps,
  InputSystemProps,
  InteractionSystemProps,
  OverflowSystemProps,
  PositionSystemProps,
  PseudoClassSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  SvgSystemProps,
  TextSystemProps,
  TransformSystemProps,
  TypographySystemProps,
} from '../props';
import {
  backgroundSystemProps,
  borderSystemProps,
  colorSystemProps,
  displaySystemProps,
  elevationSystemProps,
  flexboxSystemProps,
  inputSystemProps,
  interactionSystemProps,
  overflowSystemProps,
  positionSystemProps,
  pseudoClassSystemProps,
  sizingSystemProps,
  spacingSystemProps,
  svgSystemProps,
  textSystemProps,
  transformSystemProps,
  typographySystemProps,
} from '../props';

export type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  ElevationSystemProps &
  FlexboxSystemProps &
  InputSystemProps &
  InteractionSystemProps &
  OverflowSystemProps &
  PositionSystemProps &
  PseudoClassSystemProps &
  SizingSystemProps &
  SpacingSystemProps &
  SvgSystemProps &
  TextSystemProps &
  TypographySystemProps &
  TransformSystemProps;

const systemProps = [
  ...backgroundSystemProps,
  ...borderSystemProps,
  ...colorSystemProps,
  ...displaySystemProps,
  ...elevationSystemProps,
  ...flexboxSystemProps,
  ...inputSystemProps,
  ...interactionSystemProps,
  ...overflowSystemProps,
  ...positionSystemProps,
  ...pseudoClassSystemProps,
  ...sizingSystemProps,
  ...spacingSystemProps,
  ...svgSystemProps,
  ...textSystemProps,
  ...typographySystemProps,
  ...transformSystemProps,
];

const systemPropNames = systemProps.filter(systemProp => !systemProp.disabled).map(systemProp => systemProp.propName);

export type BoxElements =
  | 'article'
  | 'aside'
  | 'button'
  | 'clipPath'
  | 'defs'
  | 'div'
  | 'footer'
  | 'g'
  | 'header'
  | 'input'
  | 'label'
  | 'li'
  | 'linearGradient'
  | 'mask'
  | 'nav'
  | 'path'
  | 'section'
  | 'span'
  | 'stop'
  | 'svg'
  | 'ul';

export type BoxProps<
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
> = DistributiveOmit<
  BaseComponent extends ComponentType<infer BaseComponentProps>
    ? BaseComponentProps
    : ElementName extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[ElementName]
    : Record<never, never>,
  keyof SystemProps
> &
  SystemProps & {
    as?: ElementName;
    base?: BaseComponent;
    id?: string;
    ref?: Ref<BaseComponent extends abstract new (...args: any) => any ? InstanceType<BaseComponent> : HTMLElement>;
    children?: ReactElementChild | ReactElementChild[];
    onLayout?: (layoutEvent: LayoutEvent) => void;
  };

export const interpolation = createInterpolation(systemProps, { display: 'flex', boxSizing: 'border-box' });

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
