import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playstorecircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="m17.85 11.5-1.75-1-1.5 1.5 1.5 1.5 1.75-1c.4-.2.4-.75 0-1ZM8.6 7v10l4.95-5L8.6 7Zm.7 10.45c.05 0 .1-.05.15-.05l5.95-3.45-1.35-1.35-4.75 4.85Zm6.1-7.35L9.45 6.65c-.05-.05-.1-.05-.2-.05l4.8 4.9 1.35-1.4Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaystoreCircleRegular';
