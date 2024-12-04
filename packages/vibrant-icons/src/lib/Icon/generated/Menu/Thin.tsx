import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'menu-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.25 12.9h19.5c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25Zm0-7.3h19.5c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25H2.25C2.1 3.9 2 4 2 4.1v1.25c0 .15.1.25.25.25Zm0 14.5h19.5c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25H2.25c-.15.05-.25.15-.25.25v1.25c0 .15.1.25.25.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MenuThin';
