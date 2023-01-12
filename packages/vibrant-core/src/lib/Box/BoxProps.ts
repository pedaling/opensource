import type { ComponentType, Ref } from 'react';
import type { DistributiveOmit, LayoutEvent } from '@vibrant-ui/utils';
import type { ReactElementChildren } from '../../types';
import { createInterpolation } from '../createInterpolation';
import { createShouldForwardProp } from '../createShouldForwardProp';
import { injectContext } from '../injectContext';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  ElevationSystemProps,
  FlexboxSystemProps,
  InputSystemProps,
  InteractionSystemProps,
  MediaSystemProps,
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
  mediaSystemProps,
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
  TransformSystemProps &
  MediaSystemProps;

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
  ...mediaSystemProps,
];

const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled && systemProp.propName !== 'backgroundColor')
  .map(systemProp => systemProp.propName);

export type BoxElements =
  | 'article'
  | 'aside'
  | 'button'
  | 'clipPath'
  | 'defs'
  | 'div'
  | 'footer'
  | 'form'
  | 'g'
  | 'header'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'linearGradient'
  | 'main'
  | 'mask'
  | 'nav'
  | 'ol'
  | 'path'
  | 'section'
  | 'span'
  | 'stop'
  | 'svg'
  | 'table'
  | 'tbody'
  | 'td'
  | 'th'
  | 'thead'
  | 'tr'
  | 'ul';

type ComponentProps<Component extends ComponentType | undefined> = Component extends undefined
  ? undefined
  : Component extends ComponentType<infer ComponentProps>
  ? ComponentProps
  : undefined;

export type BoxProps<
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
> = SystemProps & {
  as?: ElementName;
  base?: BaseComponent;
  id?: string;
  role?: string;
  ariaLabel?: string;
  onLayout?: (layoutEvent: LayoutEvent) => void;
} & DistributiveOmit<
    ComponentProps<BaseComponent> extends undefined
      ? (ElementName extends keyof JSX.IntrinsicElements
          ? JSX.IntrinsicElements[ElementName]
          : Record<never, never>) & {
          ref?: Ref<HTMLElement>;
          children?: ReactElementChildren;
        }
      : Omit<ComponentProps<BaseComponent>, 'onLayout'>,
    keyof SystemProps
  >;

export type { LayoutEvent };

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    position: 'relative',
  })
);

export const shouldForwardProp = createShouldForwardProp(systemPropNames);
