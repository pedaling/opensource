import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alert-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M23.95 21.6 12.2 2.1c-.05-.05-.1-.1-.2-.1s-.15.05-.2.1L.05 21.6c-.1.15 0 .4.2.4h23.5c.2 0 .3-.2.2-.4M11 10.85c0-.05.05-.1.1-.1h1.8c.05 0 .1.05.1.1v4.4c0 .05-.05.1-.1.1h-1.8c-.05 0-.1-.05-.1-.1zm1 7.65c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlertFill';
