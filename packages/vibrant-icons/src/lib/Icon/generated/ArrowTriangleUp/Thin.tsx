import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'arrowtriangleup-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m16.95 14.602-4.75-7c-.1-.15-.3-.15-.4 0l-4.75 7c-.1.15 0 .4.2.4h9.5c.2 0 .3-.25.2-.4Z" />
  </Svg>
);

Thin.iconType = 'Thin';
