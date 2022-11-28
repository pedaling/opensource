import { createSystemProp } from '../../createSystemProp';
import { Portal } from '../../Portal';

const positionProp = createSystemProp({
  property: 'position',
  transform: (value: 'absolute' | 'fixed' | 'relative' | 'web_sticky') => {
    if (value === 'fixed') {
      return {
        BaseComponent: Portal,
      };
    }

    if (value === 'web_sticky') {
      return {
        position: 'relative',
      };
    }

    return {
      position: value,
    };
  },
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

export const positionSystemProps = [positionProp, topProp, rightProp, bottomProp, leftProp, zIndexProp];
