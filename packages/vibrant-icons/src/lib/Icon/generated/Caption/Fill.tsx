import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'caption',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.25 2.5h-16c-.15 0-.25.1-.25.25v4.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V5H9v14H7.5c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H13c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-1.5V5H16v2.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="M22.7 12.5h-8c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h2.75v6.25c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V15h2.75c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
