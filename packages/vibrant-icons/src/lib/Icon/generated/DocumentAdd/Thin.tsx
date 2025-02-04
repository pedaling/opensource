import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m3.8999 1.15039c-.13807 0-.25.11193-.25.25v21.20001c0 .1381.11193.25.25.25h10.3501v-1.7h-8.9001v-18.30001h8.131l.169.169v4.831h4.83l.17.17v4.97961h1.7v-5.68361l-6.164-6.166z" />
      <Svg.Path d="m18.625 20.2254v3.125h1.7v-3.125h3.125v-1.7h-3.125v-3.125h-1.7v3.125h-3.125v1.7z" />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentAddThin';
