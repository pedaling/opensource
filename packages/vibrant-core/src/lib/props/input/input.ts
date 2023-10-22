import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const placeholderColorProp = createSystemProp({
  property: 'placeholderColor',
  scale: 'colors',
  generateClassName: value => [
    css({
      '&::placeholder': {
        color: value,
        textFillColor: value,
      },
    }),
  ],
});

const hideInputSpinButtonProp = createSystemProp({
  property: 'hideInputSpinButton',
  generateClassName: (value: boolean) =>
    value
      ? [
          css({
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            MozAppearance: 'textfield',
          }),
        ]
      : [],
});

const textAlignProp = createSystemProp({
  property: 'textAlign',
});

export const inputSystemProps = [placeholderColorProp, hideInputSpinButtonProp, textAlignProp];
