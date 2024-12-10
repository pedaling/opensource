import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'groove-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.25 13.25h13.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H5.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25m0-7.25h13.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H5.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25m0 14.5h13.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H5.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'GrooveFill';
