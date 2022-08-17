import type { BackgroundSystemProps } from './background';
import { backgroundSystemProps } from './background';
import type { BorderSystemProps } from './border';
import { borderSystemProps } from './border';
import type { ColorSystemProps } from './color';
import { colorSystemProps } from './color';
import type { DisplaySystemProps } from './display';
import { displaySystemProps } from './display';
import type { ElevationSystemProps } from './elevation';
import { elevationSystemProps } from './elevation';
import type { FlexboxSystemProps } from './flexbox';
import { flexboxSystemProps } from './flexbox';
import type { InputSystemProps } from './input';
import { inputSystemProps } from './input';
import type { InteractionSystemProps } from './interaction';
import { interactionSystemProps } from './interaction';
import type { OverflowSystemProps } from './overflow';
import { overflowSystemProps } from './overflow';
import type { PositionSystemProps } from './position';
import { positionSystemProps } from './position';
import type { PseudoClassSystemProps } from './pseudoClass';
import { pseudoClassSystemProps } from './pseudoClass';
import type { SizingSystemProps } from './sizing';
import { sizingSystemProps } from './sizing';
import type { SpacingSystemProps } from './spacing';
import { spacingSystemProps } from './spacing';
import type { SvgSystemProps } from './svg';
import { svgSystemProps } from './svg';
import type { TextSystemProps } from './text';
import { textSystemProps } from './text';
import type { TransformSystemProps } from './transform';
import { transformSystemProps } from './transform';
import type { TypographySystemProps } from './typography';
import { typographySystemProps } from './typography';

export type AllSystemProps = BackgroundSystemProps &
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
  TransformSystemProps &
  TypographySystemProps;

export const allSystemProps = [
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
  ...transformSystemProps,
  ...typographySystemProps,
];

export const allSystemPropNames = allSystemProps.map(({ propName }) => propName);
