import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M3.9 1.15a.25.25 0 0 0-.25.25v21.2c0 .138.112.25.25.25h10.35v-1.7h-8.9V2.85h8.13l.17.17v4.83h4.83l.17.17V13h1.7V7.316L14.186 1.15z" />
      <Svg.Path d="M18.625 20.225v3.125h1.7v-3.125h3.125v-1.7h-3.125V15.4h-1.7v3.125H15.5v1.7z" />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DocumentAddThin';
