import { createSystemProp } from '../../createSystemProp';

const placeholderColorProp = createSystemProp({
  property: 'placeholderColor',
  scale: 'colors',
  transform: value => ({
    '&::placeholder': {
      color: value,
    },
  }),
});

const hideInputSpinButtonProp = createSystemProp({
  property: 'hideInputSpinButton',
  transform: (value: boolean) =>
    value
      ? {
          '&::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '&::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          MozAppearance: 'textfield',
        }
      : {},
});

const textAlignProp = createSystemProp({
  property: 'textAlign',
});

export const inputSystemProps = [placeholderColorProp, hideInputSpinButtonProp, textAlignProp];
