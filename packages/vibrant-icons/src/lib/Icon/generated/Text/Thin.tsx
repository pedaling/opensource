import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'text-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.05 4.8H4.8v1.6a.2.2 0 0 1-.2.2H3.1a.2.2 0 0 1-.2-.2V3.1a.2.2 0 0 1 .2-.2h17.804c-.14 0 .2.09.2.2v3.3a.2.2 0 0 1-.2.2h-1.5a.2.2 0 0 1-.2-.2V4.8h-6.25v14.4h1.45c.11 0 .2.09.2.2v1.5a.2.2 0 0 1-.2.2H9.599a.2.2 0 0 1-.2-.2v-1.5c0-.11.09-.2.2-.2h1.45z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextThin';
