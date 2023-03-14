import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'fullscreenexit-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.2 13.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h4L2.1 20.15c-.1.1-.1.25-.05.35l1.45 1.45c.1.1.25.1.35 0L8 17.8v4c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8c0-.15-.15-.3-.3-.3Zm3.6-3h7.95c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-4l4.15-4.15c.1-.1.1-.25.05-.35L20.5 2.05c-.1-.1-.25-.1-.35 0L16 6.25v-4c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v7.95c0 .15.15.3.3.3Zm7.95 2.5h-2c-.15 0-.25.1-.25.25v6.25h-6.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h8.5c.15 0 .25-.1.25-.25v-8.5c0-.15-.1-.25-.25-.25Zm-19.5-2h2c.15 0 .25-.1.25-.25V4.5h6.25c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25h-8.5C2.1 2 2 2.1 2 2.25v8.5c0 .15.1.25.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
