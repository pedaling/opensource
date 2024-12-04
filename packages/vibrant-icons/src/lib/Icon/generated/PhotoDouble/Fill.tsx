import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photodouble-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 6H19.5v13.5H6v2.25c0 .15.1.25.25.25h15.5c.15 0 .25-.1.25-.25V6.25c0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="m12 7.7 6 5.95V2.25c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25V14.8l9.7-7.15c.1-.05.2-.05.3.05Zm-5.9.55c-.75 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4Z" />
    <Svg.Path d="M11.65 10.15 2 17.3v.45c0 .15.1.25.25.25H18v-1.5l-6.35-6.35Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PhotoDoubleFill';
