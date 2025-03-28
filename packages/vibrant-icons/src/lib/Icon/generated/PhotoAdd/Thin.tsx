import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photoadd-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M23.75 18H19.5v-4.25c0-.15-.1-.25-.25-.25h-1c-.15 0-.25.1-.25.25V18h-4.25c-.15 0-.25.1-.25.25v1c0 .15.1.25.25.25H18v4.25c0 .15.1.25.25.25h1c.15 0 .25-.1.25-.25V19.5h4.25c.15 0 .25-.1.25-.25v-1c0-.15-.1-.25-.25-.25m-15-7.8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
    <Svg.Path d="M5.5 18v-1l7.2-5.25c.1-.05.25-.05.3.05l3.05 3.05c.15.15.45.05.45-.2v-1.4c0-.05-.05-.15-.05-.2L13.2 9.8c-.05-.05-.1-.05-.2-.05-.05 0-.1 0-.15.05L5.5 15.15V5.5H18v6.25c0 .15.1.25.25.25h1c.15 0 .25-.1.25-.25v-7.5c0-.15-.1-.25-.25-.25h-15C4.1 4 4 4.1 4 4.25v15c0 .15.1.25.25.25h7.5c.15 0 .25-.1.25-.25v-1c0-.15-.1-.25-.25-.25z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PhotoAddThin';
