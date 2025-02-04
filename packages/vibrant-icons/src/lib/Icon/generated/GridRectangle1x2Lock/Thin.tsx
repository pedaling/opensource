import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2lock-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path
        clipRule="evenodd"
        d="m2.8999 10.3504c-.13807 0-.25-.1119-.25-.25v-7.45001c0-.13807.11193-.25.25-.25h18.2c.1381 0 .25.11193.25.25v7.45001c0 .1381-.1119.25-.25.25zm1.45-1.70001h15.3v-4.55h-15.3z"
        fillRule="evenodd"
      />
      <Svg.Path d="m2.8999 21.6004c-.13807 0-.25-.1119-.25-.25v-7.45c0-.1381.11193-.25.25-.25h8.6001v1.7h-7.1501v4.55h7.1501v1.7z" />
      <Svg.Path
        clipRule="evenodd"
        d="m14.8999 14.4999c0-1.574 1.276-2.85 2.85-2.85s2.85 1.276 2.85 2.85v.4h1.25c.1381 0 .25.1119.25.25v6.2c0 .1381-.1119.25-.25.25h-8.2c-.1381 0-.25-.1119-.25-.25v-6.2c0-.1381.1119-.25.25-.25h1.25zm5.5 5.4v-3.05h-5.3v3.05zm-1.5-5.4v.4h-2.3v-.4c0-.6351.5149-1.15 1.15-1.15s1.15.5149 1.15 1.15z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'GridRectangle1x2LockThin';
