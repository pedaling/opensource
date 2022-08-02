import type { ResponsiveValue } from '@vibrant-ui/core';
import type { ColorToken, OpacityToken } from '@vibrant-ui/theme';

export const getOpacity = ({
  disabled,
  isFocused,
  isActivated,
  isHovered,
  interactions,
  overlayColor,
}: {
  disabled: boolean;
  isFocused: boolean;
  isHovered: boolean;
  isActivated: boolean;
  overlayColor?: ResponsiveValue<ColorToken>;
  interactions: ('active' | 'focus' | 'hover')[];
}) => {
  const getOverlayOpacity = (): OpacityToken | number => {
    if (disabled || !overlayColor) {
      return 0;
    }

    if (isActivated && interactions?.includes('active')) {
      return 'overlay.active';
    }

    if (isFocused && interactions?.includes('focus')) {
      return 'overlay.focus';
    }

    if (isHovered && overlayColor && interactions?.includes('hover')) {
      return 'overlay.hover';
    }

    return 0;
  };

  const getTextOpacity = (): OpacityToken | number => {
    if (disabled || overlayColor) {
      return 1;
    }

    if (isActivated && interactions?.includes('active')) {
      return 'text.active';
    }

    if (isFocused && interactions?.includes('focus')) {
      return 'text.focus';
    }

    return 1;
  };

  return {
    overlayOpacity: getOverlayOpacity(),
    textOpacity: getTextOpacity(),
  };
};
