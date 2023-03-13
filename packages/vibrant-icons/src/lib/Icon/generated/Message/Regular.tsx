import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'message',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 3.5H2.25c-.15 0-.25.1-.25.25v16.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V3.75c0-.15-.1-.25-.25-.25ZM19.5 6l-7.35 4.9c-.1.05-.2.05-.3 0L4.5 6h15Zm-15 12V9l7.35 4.9c.1.05.2.05.3 0L19.5 9v9h-15Z" />
  </Svg>
);

Regular.iconType = 'Regular';
