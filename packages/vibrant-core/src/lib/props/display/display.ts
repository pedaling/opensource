import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
  generateClassName: (value = 'flex') => {
    if (value === 'none') {
      return [css({ display: 'none' })];
    }

    if (value === 'inline-flex') {
      return [
        css({
          display: 'flex',
        }),
        css({
          alignSelf: 'flex-start',
        }),
        css({
          alignContent: 'stretch',
        }),
        css({
          flexShrink: 1,
        }),
      ];
    }

    if (value === 'flex') {
      return [
        css({
          display: 'flex',
        }),
        css({
          alignContent: 'stretch',
        }),
        css({
          flexShrink: 1,
        }),
      ];
    }

    return [
      css({
        display: value.replace('web_', ''),
      }),
    ];
  },
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
  generateClassName: (hidden: boolean) => [
    css(
      hidden
        ? {
            display: 'none',
          }
        : {
            display: 'flex',
          }
    ),
  ],
});

const tableLayoutProp = createSystemProp({
  property: 'tableLayout',
});

const writingModeProp = createSystemProp({
  property: 'writingMode',
});

export const displaySystemProps = [
  displayProp,
  visibilityProp,
  opacityProp,
  hiddenProp,
  tableLayoutProp,
  writingModeProp,
];
