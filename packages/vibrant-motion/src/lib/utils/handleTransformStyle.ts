import { isDefined } from '@vibrant-ui/utils';

export const handleTransformStyle = (style: Record<string, any>) => {
  const { x, y, rotate, scale, ...restStyle } = style;

  if (isDefined(x) || isDefined(y) || isDefined(rotate) || isDefined(scale)) {
    return {
      ...restStyle,
      transform: {
        ...(isDefined(x) ? { translateX: x } : {}),
        ...(isDefined(y) ? { translateY: y } : {}),
        ...(isDefined(rotate) ? { rotate } : {}),
        ...(isDefined(scale) ? { scale } : {}),
      },
    };
  }

  return style;
};
