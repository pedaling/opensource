export const withTransformStyle = (style: any) => {
  if (typeof window === 'undefined') {
    const transform = [];
    const { x, y, ...restStyle } = style;

    if (x !== undefined) {
      transform.push({ translateX: x });
    }

    if (y !== undefined) {
      transform.push({ translateY: y });
    }

    return {
      ...restStyle,
      transform,
    };
  }

  return style;
};
