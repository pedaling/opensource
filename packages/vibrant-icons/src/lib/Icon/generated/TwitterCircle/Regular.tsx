import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'twittercircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path d="M17.05 10v.3c0 3.1-2.35 6.7-6.7 6.7-1.35 0-2.55-.4-3.6-1.05.2 0 .35.05.55.05 1.1 0 2.1-.4 2.95-1-1.05 0-1.9-.7-2.2-1.65.15.05.3.05.45.05.2 0 .4-.05.6-.1-1.1-.2-1.9-1.15-1.9-2.3v-.05c.3.2.7.3 1.05.3-.65-.4-1.05-1.15-1.05-1.95q0-.675.3-1.2c1.15 1.45 2.9 2.35 4.85 2.45-.05-.15-.05-.35-.05-.55 0-1.3 1.05-2.35 2.35-2.35.7 0 1.3.3 1.7.75.55-.1 1.05-.3 1.5-.55-.2.55-.55 1-1.05 1.3.5-.05.95-.2 1.35-.35-.2.45-.6.85-1.1 1.2" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TwitterCircleRegular';
