import { createInterpolation } from '../createInterpolation';
import { injectContext } from '../injectContext';
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
  positionSystemProps,
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
  ...positionSystemProps,
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
  clear: () => void;
};

export type TextInputProps = SystemProps &
  (
    | {
        type: Exclude<TextInputType, 'number'>;
        min?: never;
        max?: never;
      }
    | {
        type: Extract<TextInputType, 'number'>;
        min?: number;
        max?: number;
      }
  ) & {
    defaultValue?: string;
    placeholder?: string;
    pattern?: RegExp;
    maxLength?: number;
    autoFocus?: boolean;
    tabIndex?: number;
    readOnly?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    focusStyle?: SystemProps;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyPress?: ({ key, prevent }: { key: string; prevent: () => void }) => void;
    onValueChange?: ({ value, prevent }: { value: string; prevent: () => void }) => void;
    onSubmit?: (value: string) => void;
  };

export const interpolation = injectContext(
  createInterpolation(systemProps, {
    display: 'flex',
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: 'onColor',
    typography: 'body2',
    width: '100%',
    p: 0,
  })
);

export const replaceValue = ({ pattern, value }: { pattern?: RegExp; value: string }) =>
  pattern ? value.replace(new RegExp(`(?!(${pattern.source})).`, 'g'), '') : value;
