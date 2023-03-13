import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.45 2.45 16.2 4.6c-.05.1-.05.25.1.35l1.75 1c.1.05.25.05.35-.1l1.25-2.15c.05-.1.05-.25-.1-.35l-1.75-1c-.1-.05-.25 0-.35.1Zm4.3 17.05H20.5V14c0-4.65-3.85-8.5-8.5-8.5S3.5 9.3 3.5 14v5.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM6 14c0-3.3 2.7-6 6-6s6 2.7 6 6v5.5h-4.75v-5.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v5.25H6V14Zm7.25-12.75v2.5c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2.5c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25Zm-6.7 1.2L7.8 4.6c.05.1.05.25-.1.35l-1.75 1c-.1.05-.25.05-.35-.1L4.35 3.7c-.05-.1 0-.25.1-.35l1.75-1c.1-.05.25 0 .35.1Z" />
  </Svg>
);

Regular.iconType = 'Regular';
