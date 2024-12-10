import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'applecircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1" />
    <Svg.Path
      fillRule="evenodd"
      d="M14.9 11.35c0 1.75 1.5 2.3 1.55 2.3 0 .05-.25.8-.8 1.6-.5.7-.95 1.4-1.75 1.4-.75 0-1-.45-1.9-.45-.85 0-1.15.45-1.85.45-.75.05-1.3-.75-1.8-1.45-1-1.4-1.75-4-.7-5.75.5-.85 1.4-1.4 2.35-1.45.75 0 1.45.5 1.9.5s1.3-.6 2.2-.5c.35 0 1.4.15 2.1 1.15-.1.1-1.3.75-1.3 2.2M13.45 7.1c.4-.5.65-1.15.6-1.8-.55 0-1.25.4-1.7.85-.35.45-.7 1.1-.6 1.75.65.1 1.3-.3 1.7-.8"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AppleCircleRegular';
