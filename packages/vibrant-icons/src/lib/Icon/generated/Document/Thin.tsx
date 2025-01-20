import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'document-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m3.8999 1.15039c-.13807 0-.25.11193-.25.25v21.20001c0 .1381.11193.25.25.25h16.2c.1381 0 .25-.1119.25-.25v-15.28401l-6.164-6.166zm1.45 1.7h8.131l.169.169v4.831h4.83l.17.17v13.13001h-13.3z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentThin';
