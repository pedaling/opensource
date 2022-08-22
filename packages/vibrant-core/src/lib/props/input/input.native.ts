import { createSystemProp } from '../../createSystemProp';

const placeholderColorProp = createSystemProp({
  property: 'placeholderColor',
  scale: 'colors',
  transform: value => ({
    props: {
      placeholderTextColor: value,
    },
  }),
});

const hideInputSpinButtonProp = createSystemProp({
  property: 'hideInputSpinButton',
  disabled: true,
});

const textAlignProp = createSystemProp({
  property: 'textAlign',
});

export const inputSystemProps = [placeholderColorProp, hideInputSpinButtonProp, textAlignProp];
