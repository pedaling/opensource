import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m2.6499 10.6004c-.13807 0-.25-.1119-.25-.25v-7.95001c0-.13807.11193-.25.25-.25h18.7c.1381 0 .25.11193.25.25v7.95001c0 .1381-.1119.25-.25.25z" />
      <Svg.Path d="m2.6499 21.8504c-.13807 0-.25-.1119-.25-.25v-7.95c0-.1381.11193-.25.25-.25h8.1001c.1381 0 .25.1119.25.25v7.95c0 .1381-.1119.25-.25.25z" />
      <Svg.Path
        clipRule="evenodd"
        d="m20.8499 15.1499v-.4c0-1.7121-1.3879-3.1-3.1-3.1s-3.1 1.3879-3.1 3.1v.4h-1.25c-.1381 0-.25.1119-.25.25v6.2c0 .1381.1119.25.25.25h8.7c.1381 0 .25-.1119.25-.25v-6.2c0-.1381-.1119-.25-.25-.25zm-4 0h1.8v-.4c0-.4971-.4029-.9-.9-.9s-.9.4029-.9.9z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'GridRectangle1x2LockFill';
