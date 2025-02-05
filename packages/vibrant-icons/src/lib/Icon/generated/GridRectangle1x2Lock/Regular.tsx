import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        fillRule="evenodd"
        d="M2.65 2.15a.25.25 0 0 0-.25.25v7.95c0 .139.112.25.25.25h18.7a.25.25 0 0 0 .25-.25V2.4a.25.25 0 0 0-.25-.25zm16.75 2.2V8.4H4.6V4.35z"
        clipRule="evenodd"
      />
      <Svg.Path d="M2.65 13.4a.25.25 0 0 0-.25.25v7.95c0 .138.112.25.25.25H11v-2.2H4.6V15.6H11v-2.2z" />
      <Svg.Path
        fillRule="evenodd"
        d="M20.85 15.15v-.4a3.1 3.1 0 1 0-6.2 0v.4H13.4a.25.25 0 0 0-.25.25v6.2c0 .138.112.25.25.25h8.7a.25.25 0 0 0 .25-.25v-6.2a.25.25 0 0 0-.25-.25zm-.7 2.2h-4.8v2.3h4.8zm-3.3-2.2h1.8v-.4a.9.9 0 1 0-1.8 0z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'GridRectangle1x2LockRegular';
