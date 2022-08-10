import { createInterpolation } from '../createInterpolation';
import type {
  BackgroundSystemProps,
  BorderSystemProps,
  ColorSystemProps,
  DisplaySystemProps,
  InputSystemProps,
  SizingSystemProps,
  SpacingSystemProps,
  TypographySystemProps,
} from '../props';
import {
  backgroundSystemProps,
  borderSystemProps,
  colorSystemProps,
  displaySystemProps,
  inputSystemProps,
  sizingSystemProps,
  spacingSystemProps,
  typographySystemProps,
} from '../props';

export type SystemProps = BackgroundSystemProps &
  BorderSystemProps &
  ColorSystemProps &
  DisplaySystemProps &
  InputSystemProps &
  SpacingSystemProps &
  SizingSystemProps &
  TypographySystemProps;

const systemProps = [
  ...backgroundSystemProps,
  ...borderSystemProps,
  ...colorSystemProps,
  ...displaySystemProps,
  ...inputSystemProps,
  ...spacingSystemProps,
  ...sizingSystemProps,
  ...typographySystemProps,
];

export const systemPropNames = systemProps
  .filter(systemProp => !systemProp.disabled)
  .map(systemProp => systemProp.propName);

type TextInputType = 'number' | 'text';

export type TextInputRef = {
  focus: () => void;
  blur: () => void;
};

export type TextInputProps = SystemProps & {
  type: TextInputType;
  focusStyle?: SystemProps;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const interpolation = createInterpolation(systemProps, {
  display: 'flex',
  backgroundColor: 'transparent',
  borderWidth: 0,
  color: 'onColor',
  typography: 'body2',
  width: '100%',
  p: 0,
});
