import { createSystemProp } from '../../createSystemProp';

const pseudoHoverProp = createSystemProp({
  property: 'pseudoHover',
  transform: value => ({
    '@media (hover: hover)': {
      '&:hover': value,
    },
  }),
});

const pseudoFocusProp = createSystemProp({
  property: 'pseudoFocus',
  transform: value => ({
    '&:focus': value,
  }),
});

const pseudoActiveProp = createSystemProp({
  property: 'pseudoActive',
  transform: value => ({
    '&:active': value,
  }),
});

export const pseudoClassProps = [pseudoHoverProp, pseudoFocusProp, pseudoActiveProp];
