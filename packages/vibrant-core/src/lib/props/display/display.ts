import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
  transform: (value: string) => {
    if (value === 'none') {
      return { display: 'none' };
    }

    if (value === 'inline-flex') {
      return {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        alignContent: 'stretch',
        flexShrink: 1,
      };
    }

    return {
      display: 'flex',
      flexDirection: 'column',
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
      : {},
});

export const displaySystemProps = [displayProp, visibilityProp, opacityProp, hiddenProp];
