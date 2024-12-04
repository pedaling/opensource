import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'copy-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.25 18h1.5V3.75H18v-1.5c0-.15-.1-.25-.25-.25H2.25C2.1 2 2 2.1 2 2.25v15.5c0 .15.1.25.25.25Z" />
    <Svg.Path d="M7.25 20.25v-13h13v13h-13ZM5.8 22h15.95c.15 0 .3-.15.3-.3V5.8c0-.15-.15-.3-.3-.3H5.8c-.15 0-.3.15-.3.3v15.95c0 .1.15.25.3.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CopyThin';
