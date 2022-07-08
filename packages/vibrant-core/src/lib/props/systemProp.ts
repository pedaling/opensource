import type { BackgroundProps } from './background';
import { backgroundProps } from './background';
import type { BorderProps } from './border';
import { borderProps } from './border';
import type { ColorProps } from './color';
import { colorProps } from './color';
import type { DisplayProps } from './display';
import { displayProps } from './display';
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
  TypographyProps;

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
];

export const propNames = systemProps.filter(systemProp => !systemProp.disabled).map(systemProp => systemProp.propName);
