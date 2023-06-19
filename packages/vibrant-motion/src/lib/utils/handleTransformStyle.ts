import { isDefined } from '@vibrant-ui/utils';

export const handleTransformStyle = (style: Record<string, any>) => {
  const { x, y, rotate, ...restStyle } = style;

  if (isDefined(x) || isDefined(y) || isDefined(rotate)) {
    return {
      ...restStyle,
      transform: {
        ...(isDefined(x) ? { translateX: x } : {}),
        ...(isDefined(y) ? { translateY: y } : {}),
        ...(isDefined(rotate) ? { rotate } : {}),
      },
    };
  }

  return style;
};
