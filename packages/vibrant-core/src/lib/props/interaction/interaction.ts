import { createSystemProp } from '../../createSystemProp';

const makePressableStyle = (interactions: ('active' | 'focus' | 'hover')[], overlayColor?: string) =>
  interactions.reduce((acc, cur) => {
    const style = overlayColor
      ? {
          hover: { pseudoHover: { pseudoBefore: { opacity: 'overlay.hover' } } },
          focus: { pseudoFocusVisible: { pseudoBefore: { opacity: 'overlay.focus' } } },
          active: { pseudoActive: { pseudoBefore: { opacity: 'overlay.active' } } },
        }
      : {
          focus: { pseudoFocusVisible: { opacity: 'text.focus' } },
          active: { pseudoActive: { opacity: 'text.active' } },
        };

    return {
      ...acc,
      ...(style[cur] ?? {}),
    };
  }, {});

const cursorProp = createSystemProp({
  property: 'cursor',
});

const pressable = createSystemProp({
  property: 'pressable',
  transform: value => {
    if (!value) {
      return {
        cursor: 'default',
      };
    }

    const { overlayColor, interactions } = value;

    if (!overlayColor) {
      return {
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        ...makePressableStyle(interactions ?? []),
      };
    }

    return {
      cursor: 'pointer',
      position: 'relative',
      overflowX: 'hidden',
      overflowY: 'hidden',
      zIndex: 0,
      pseudoBefore: {
        position: 'absolute',
        zIndex: -1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0,
        transition: 'opacity 0.2s',
        backgroundColor: overlayColor,
      },
      ...makePressableStyle(interactions ?? [], overlayColor),
    };
  },
  shouldInterpolation: 'after',
});

export const interactionProps = [cursorProp, pressable];
