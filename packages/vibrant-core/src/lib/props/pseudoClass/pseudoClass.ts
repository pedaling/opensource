import { createSystemProp } from '../../createSystemProp';

const pseudoHoverProp = createSystemProp({
  property: 'pseudoHover',
  transform: value => ({
    '@media (hover: hover)': {
      '&:hover': value,
    },
  }),
  shouldInterpolation: true,
});

const pseudoFocusProp = createSystemProp({
  property: 'pseudoFocus',
  styleProperty: '&:focus',
  shouldInterpolation: true,
});

const pseudoActiveProp = createSystemProp({
  property: 'pseudoActive',
  styleProperty: '&:active',
  shouldInterpolation: true,
});

export const pseudoClassProps = [pseudoHoverProp, pseudoFocusProp, pseudoActiveProp];
