export const withTransformStyle = (style: any) => {
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
};
