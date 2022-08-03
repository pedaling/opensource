import { createSystemProp } from '../../createSystemProp';

const placeholderColorProp = createSystemProp({
  property: 'placeholderColor',
  styleProperty: '&::placeholder',
  scale: 'colors',
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

export const inputProps = [placeholderColorProp, hideInputSpinButtonProp];
