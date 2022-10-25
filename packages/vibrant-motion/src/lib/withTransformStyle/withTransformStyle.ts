import { isNative } from '@vibrant-ui/core';

export const withTransformStyle = (style: any) => {
  if (isNative) {
    const transform = [];
    const { x, y, rotate, ...restStyle } = style;

    if (x !== undefined) {
      transform.push({ translateX: x });
    }

    if (y !== undefined) {
      transform.push({ translateY: y });
    }

    if (rotate !== undefined) {
      transform.push({ rotate });
    }

    return {
      ...restStyle,
      ...(transform.length > 0 ? { transform } : {}),
    };
  }

  return style;
};
