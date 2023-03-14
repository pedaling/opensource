import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'bell-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 15H19.5V8.5C19.5 4.4 16.1 1 12 1S4.5 4.4 4.5 8.5V15H3.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
);

Fill.iconType = 'Fill';
