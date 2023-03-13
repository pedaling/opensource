import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId = 'home', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.5 22.25v-11.1c0-.15-.05-.3-.15-.35l-10.2-9.25c-.1-.1-.25-.1-.35 0L1.65 10.8c-.1.1-.15.2-.15.35v11.1c0 .15.1.25.25.25h9v-7.25c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v7.25h9c.15 0 .25-.1.25-.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
