import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M2.65 10.6a.25.25 0 0 1-.25-.25V2.4a.25.25 0 0 1 .25-.25h18.7a.25.25 0 0 1 .25.25v7.95a.25.25 0 0 1-.25.25zm0 11.25a.25.25 0 0 1-.25-.25v-7.95a.25.25 0 0 1 .25-.25h8.1a.25.25 0 0 1 .25.25v7.95a.25.25 0 0 1-.25.25z" />
      <Svg.Path
        fillRule="evenodd"
        d="M20.85 15.15v-.4a3.1 3.1 0 1 0-6.2 0v.4H13.4a.25.25 0 0 0-.25.25v6.2c0 .138.112.25.25.25h8.7a.25.25 0 0 0 .25-.25v-6.2a.25.25 0 0 0-.25-.25zm-4 0h1.8v-.4a.9.9 0 1 0-1.8 0z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'GridRectangle1x2LockFill';
