import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const marginProp = createSystemProp({
  property: 'm',
  styleProperty: 'margin',
});

const marginTopProp = createSystemProp({
  property: 'mt',
  styleProperty: 'marginTop',
});

const marginLeftProp = createSystemProp({
  property: 'ml',
  styleProperty: 'marginLeft',
});

const marginBottomProp = createSystemProp({
  property: 'mb',
  styleProperty: 'marginBottom',
});

const marginRightProp = createSystemProp({
  property: 'mr',
  styleProperty: 'marginRight',
});

const marginVerticalProp = createSystemProp({
  property: 'my',
  generateClassName: value => [
    css({
      marginTop: value,
    }),
    css({
      marginBottom: value,
    }),
  ],
});

const marginHorizontalProp = createSystemProp({
  property: 'mx',
  generateClassName: value => [
    css({
      marginLeft: value,
    }),
    css({
      marginRight: value,
    }),
  ],
});

const paddingProp = createSystemProp({
  property: 'p',
  styleProperty: 'padding',
});

const paddingTopProp = createSystemProp({
  property: 'pt',
  styleProperty: 'paddingTop',
});

const paddingLeftProp = createSystemProp({
  property: 'pl',
  styleProperty: 'paddingLeft',
});

const paddingBottomProp = createSystemProp({
  property: 'pb',
  styleProperty: 'paddingBottom',
});

const paddingRightProp = createSystemProp({
  property: 'pr',
  styleProperty: 'paddingRight',
});

const paddingVerticalProp = createSystemProp({
  property: 'py',
  generateClassName: value => [
    css({
      paddingTop: value,
    }),
    css({
      paddingBottom: value,
    }),
  ],
});

const paddingHorizontalProp = createSystemProp({
  property: 'px',
  generateClassName: value => [
    css({
      paddingLeft: value,
    }),
    css({
      paddingRight: value,
    }),
  ],
});

export const spacingSystemProps = [
  marginProp,
  marginTopProp,
  marginLeftProp,
  marginBottomProp,
  marginRightProp,
  marginVerticalProp,
  marginHorizontalProp,
  paddingProp,
  paddingTopProp,
  paddingLeftProp,
  paddingBottomProp,
  paddingRightProp,
  paddingVerticalProp,
  paddingHorizontalProp,
];
