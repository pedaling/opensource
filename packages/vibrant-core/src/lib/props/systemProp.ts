import type { BackgroundProps } from './background';
import { backgroundProps } from './background';
import type { BorderProps } from './border';
import { borderProps } from './border';
import type { ColorProps } from './color';
import { colorProps } from './color';
import type { DisplayProps } from './display';
import { displayProps } from './display';
import { elevationProps } from './elevation';
import type { ElevationProps } from './elevation/type';
import type { FlexboxProps } from './flexbox';
import { flexboxProps } from './flexbox';
import type { InteractionProps } from './interaction';
import { interactionProps } from './interaction';
import type { PositionProps } from './position';
import { positionProps } from './position';
import type { PseudoClassProps } from './pseudoClass';
import { pseudoClassProps } from './pseudoClass';
import type { SizingProps } from './sizing';
import { sizingProps } from './sizing';
import type { SpacingProps } from './spacing';
import { spacingProps } from './spacing';
import type { TransformProps } from './transform';
import { transformProps } from './transform';
import type { TypographyProps } from './typography';
import { typographyProps } from './typography';

type SystemProps = BackgroundProps &
  BorderProps &
  ColorProps &
  DisplayProps &
  FlexboxProps &
  InteractionProps &
  PositionProps &
  PseudoClassProps &
  SizingProps &
  SpacingProps &
  TypographyProps &
  TransformProps &
  ElevationProps;

export type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  InteractionProps,
  PositionProps,
  PseudoClassProps,
  SizingProps,
  SpacingProps,
  TypographyProps,
  SystemProps,
  ElevationProps,
};

export const systemProps = [
  ...backgroundProps,
  ...borderProps,
  ...colorProps,
  ...displayProps,
  ...flexboxProps,
  ...interactionProps,
  ...positionProps,
  ...pseudoClassProps,
  ...sizingProps,
  ...spacingProps,
  ...typographyProps,
  ...transformProps,
  ...elevationProps,
];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);
