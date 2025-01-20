import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        clipRule="evenodd"
        d="m2.6499 2.15039c-.13807 0-.25.11193-.25.25v7.95001c0 .1381.11193.25.25.25h18.7c.1381 0 .25-.1119.25-.25v-7.95001c0-.13807-.1119-.25-.25-.25zm16.75 2.2v4.05h-14.8v-4.05z"
        fillRule="evenodd"
      />
      <Svg.Path d="m2.6499 13.4004c-.13807 0-.25.1119-.25.25v7.95c0 .1381.11193.25.25.25h8.3501v-2.2h-6.4001v-4.05h6.4001v-2.2z" />
      <Svg.Path
        clipRule="evenodd"
        d="m20.8499 15.1499v-.4c0-1.7121-1.3879-3.1-3.1-3.1s-3.1 1.3879-3.1 3.1v.4h-1.25c-.1381 0-.25.1119-.25.25v6.2c0 .1381.1119.25.25.25h8.7c.1381 0 .25-.1119.25-.25v-6.2c0-.1381-.1119-.25-.25-.25zm-.7 2.2h-4.8v2.3h4.8zm-3.3-2.2h1.8v-.4c0-.4971-.4029-.9-.9-.9s-.9.4029-.9.9z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'GridRectangle1x2LockRegular';
