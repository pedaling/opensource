import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
});

const visibilityProp = createSystemProp({
  property: 'visibility',
});

const opacityProp = createSystemProp({
  property: 'opacity',
  scale: 'opacity',
});

const hiddenProp = createSystemProp({
  property: 'hidden',
  transform: (hidden: boolean) =>
    hidden
      ? {
          display: 'none',
        }
      : {},
});

const overflowXProp = createSystemProp({
  property: 'overflowX',
});

const overflowYProp = createSystemProp({
  property: 'overflowY',
});

const hideScrollProp = createSystemProp({
  property: 'hideScroll',
  transform: (value: boolean) =>
    value
      ? {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      : {},
});

const hideInputSpinButton = createSystemProp({
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

export const displayProps = [
  displayProp,
  visibilityProp,
  opacityProp,
  hiddenProp,
  overflowXProp,
  overflowYProp,
  hideScrollProp,
  hideInputSpinButton,
];
