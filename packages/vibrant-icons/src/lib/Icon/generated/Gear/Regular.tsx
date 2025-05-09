import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gear-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m22 16.2-1.1-.65a.24.24 0 0 1-.1-.3c.35-1 .6-2.1.6-3.25 0-1.25-.25-2.4-.65-3.5-.05-.1 0-.25.1-.3l1.05-.6c.1-.05.15-.2.1-.35L21 5.5c-.05-.1-.2-.15-.35-.1l-1.1.6c-.1.05-.25.05-.3-.05-1.45-1.75-3.5-3-5.9-3.4-.1 0-.2-.1-.2-.25V1.25c0-.15-.15-.25-.25-.25h-2c-.15 0-.25.1-.25.25V2.4c0 .1-.1.2-.2.25C8 3 5.9 4.25 4.45 6.1c-.1.1-.2.1-.3.05l-.9-.5a.264.264 0 0 0-.35.1l-1 1.75c-.05.1-.05.25.1.35l.9.5c.1.05.15.15.1.3-.4 1.05-.6 2.2-.6 3.35 0 1.25.25 2.5.7 3.6.05.1 0 .25-.1.3l-.85.5c-.1.05-.15.2-.1.35l1 1.75c.05.1.2.15.35.1l.9-.5q.15-.15.3 0c1.5 1.8 3.65 3 6.05 3.3.1 0 .2.1.2.25v1.1c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V21.6c0-.1.1-.2.2-.25 2.35-.45 4.4-1.7 5.8-3.55.1-.1.2-.15.3-.05l1.05.6c.1.05.25.05.35-.1l1-1.75c.1-.1.05-.25-.05-.3M11.9 19c-3.85 0-7-3.15-7-7s3.15-7 7-7 7 3.15 7 7-3.15 7-7 7" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'GearRegular';
