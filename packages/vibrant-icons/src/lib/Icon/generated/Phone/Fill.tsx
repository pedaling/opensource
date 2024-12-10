import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'phone-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.15 22.5c-2.85 0-5-.75-8.45-4.2C.85 12.5-.05 7.5 3.95 3.45l1.9-1.9c.1-.1.25-.1.35 0l5.55 5.55c.1.1.1.25 0 .35L9.2 10l4.75 4.75 2.55-2.55c.1-.1.25-.1.35 0l5.55 5.55c.1.1.1.25 0 .35L20.5 20c-1.6 1.7-3.4 2.5-5.35 2.5" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PhoneFill';
