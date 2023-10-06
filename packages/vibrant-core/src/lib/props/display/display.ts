import { createSystemProp } from '../../createSystemProp';

const displayProp = createSystemProp({
  property: 'display',
  transform: (value = 'flex') => {
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

    if (value === 'flex') {
      return {
        display: 'flex',
        alignContent: 'stretch',
        flexShrink: 1,
      };
    }

    return {
      display: value.replace('web_', ''),
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
