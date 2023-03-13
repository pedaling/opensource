import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-10.75V15h-2.75l-2.5 2.5h9c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H19.5V9.75l-2.5 2.5Zm4.95-8.75L20.5 2.05c-.1-.1-.25-.1-.35 0L18.1 4.1C16.7 2.25 14.5 1 12 1 7.9 1 4.5 4.4 4.5 8.5V15H3.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h1.5L2.1 20.15c-.1.1-.1.25-.05.35l1.45 1.45c.1.1.25.1.35 0l18.1-18.1c.05-.1.05-.25 0-.35ZM7 15V8.5c0-2.75 2.25-5 5-5 1.8 0 3.4 1 4.3 2.45L7.25 15H7Z" />
  </Svg>
);

Regular.iconType = 'Regular';
