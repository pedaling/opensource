import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'reply-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-4.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <Svg.Path d="M12 3.5c4.95 0 8.9 4.2 8.45 9.25-.1 1.45-.65 2.8-1.45 4.05-.1.15-.15.3-.15.5L19 19l-1.75-.1c-.15 0-.35.05-.5.15-1.2.8-2.6 1.3-4.05 1.45-5 .4-9.2-3.55-9.2-8.5 0-4.7 3.8-8.5 8.5-8.5M12 1C5.5 1 .35 6.6 1.05 13.25c.55 5.05 4.65 9.15 9.7 9.7 2.6.3 5.05-.35 7.05-1.6.1-.05.2-.1.3-.05l3.1.25c.15 0 .25-.1.25-.25l-.25-3.15c0-.1 0-.2.05-.3C22.4 16.15 23 14.15 23 12c0-6.1-4.95-11-11-11" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ReplyRegular';
