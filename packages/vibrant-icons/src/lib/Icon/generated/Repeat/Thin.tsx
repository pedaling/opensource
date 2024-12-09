import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'repeat-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15 4H6.25V2.35c0-.15-.15-.25-.3-.15L2.1 4.7c-.1.1-.1.25 0 .35l3.85 2.5c.15.1.3 0 .3-.15V5.75H15c2.9 0 5.25 2.35 5.25 5.25v1.25c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V11c0-3.85-3.15-7-7-7m6.9 15-3.85-2.5c-.15-.1-.3 0-.3.15v1.65H9a5.25 5.25 0 0 1-5.25-5.25V11.8c0-.2-.1-.3-.25-.3H2.25c-.15 0-.25.1-.25.25V13c0 3.85 3.15 7 7 7h8.75v1.65c0 .15.15.25.3.15l3.85-2.5c.15-.05.15-.25 0-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'RepeatThin';
