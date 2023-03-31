import { createSystemProp } from '../../createSystemProp';

const positionProp = createSystemProp({
  property: 'position',
  transform: (value: 'absolute' | 'fixed' | 'relative' | 'web_static' | 'web_sticky') => {
    if (value === 'web_sticky') {
      return {
        position: 'sticky',
      };
    }

    if (value === 'web_static') {
      return {
        position: 'static',
      };
    }

    return {
      position: value,
    };
  },
});

const snapAlignmentProp = createSystemProp({
  property: 'snapAlignment',
  transform: (value: 'center' | 'end' | 'start') => ({ scrollSnapAlign: value }),
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
