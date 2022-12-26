import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
  transform: value => {
    if (value === 'none') {
      return { display: 'none' };
    }

    if (value === 'inline-flex') {
      return {
        display: 'flex',
        alignSelf: 'flex-start',
        alignContent: 'stretch',
        flexShrink: 1,
      };
    }

    return {
      display: 'flex',
      alignContent: 'stretch',
      flexShrink: 1,
    };
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
  transform: (hidden: boolean) =>
    hidden
      ? {
          display: 'none',
        }
      : {
          display: 'flex',
        },
});

export const displaySystemProps = [displayProp, visibilityProp, opacityProp, hiddenProp];
