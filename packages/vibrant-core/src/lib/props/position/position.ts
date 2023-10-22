import { css } from '@emotion/css';
import { createSystemProp } from '../../createSystemProp';

const positionProp = createSystemProp({
  property: 'position',
  generateClassName: (value: 'absolute' | 'fixed' | 'relative' | 'web_static' | 'web_sticky') => {
    if (value === 'web_sticky') {
      return [
        css({
          position: 'sticky',
        }),
      ];
    }

    if (value === 'web_static') {
      return [
        css({
          position: 'static',
        }),
      ];
    }

    return [
      css({
        position: value,
      }),
    ];
  },
});

const snapAlignmentProp = createSystemProp({
  property: 'snapAlignment',
  styleProperty: 'scrollSnapAlign',
});

const topProp = createSystemProp({
  property: 'top',
});

const rightProp = createSystemProp({
  property: 'right',
});

const bottomProp = createSystemProp({
  property: 'bottom',
});

const leftProp = createSystemProp({
  property: 'left',
});

const zIndexProp = createSystemProp({
  property: 'zIndex',
});

export const positionSystemProps = [
  positionProp,
  topProp,
  rightProp,
  bottomProp,
  leftProp,
  zIndexProp,
  snapAlignmentProp,
];
