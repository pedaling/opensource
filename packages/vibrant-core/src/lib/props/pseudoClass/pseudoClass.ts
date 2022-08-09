import { createSystemProp } from '../../createSystemProp';

const pseudoHoverProp = createSystemProp({
  property: 'pseudoHover',
  transform: value => ({
    '@media (hover: hover)': {
      '&:hover': value,
    },
  }),
  shouldInterpolation: 'before',
});

const pseudoFocusProp = createSystemProp({
  property: 'pseudoFocus',
  styleProperty: '&:focus',
  shouldInterpolation: 'before',
});

const pseudoActiveProp = createSystemProp({
  property: 'pseudoActive',
  styleProperty: '&:active',
  shouldInterpolation: 'before',
});

const pseudoBeforeProp = createSystemProp({
  property: 'pseudoBefore',
  transform: value => ({
    '&::before': {
      content: '""',
      ...value,
    },
  }),
  shouldInterpolation: 'before',
});

const pseudoAfterProp = createSystemProp({
  property: 'pseudoAfter',
  transform: value => ({
    '&::after': {
      content: '""',
      ...value,
    },
  }),
  shouldInterpolation: 'before',
});

const pseudoPlaceholder = createSystemProp({
  property: 'pseudoPlaceholder',
  styleProperty: '&::placeholder',
  shouldInterpolation: 'before',
});

export const pseudoClassSystemProps = [
  pseudoHoverProp,
  pseudoFocusProp,
  pseudoActiveProp,
  pseudoBeforeProp,
  pseudoAfterProp,
  pseudoPlaceholder,
];
