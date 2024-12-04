import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'smile-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1ZM7.5 8.75c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2Zm8.95 6.6c-1.15 1.25-2.75 2-4.45 2-1.7 0-3.3-.7-4.45-2-.1-.1-.1-.25.05-.35l1.55-1.25c.1-.1.25-.05.35.05.65.7 1.55 1.1 2.5 1.1s1.85-.4 2.5-1.1c.1-.1.25-.1.35-.05L16.4 15c.1.05.15.25.05.35Zm.05-4.6c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v2Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SmileFill';
