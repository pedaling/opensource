import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'home-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.6 21.6a.2.2 0 0 1-.2-.2V9.66a.2.2 0 0 1 .068-.151l9.4-8.195a.2.2 0 0 1 .263 0l9.4 8.195a.2.2 0 0 1 .069.15V21.4a.2.2 0 0 1-.2.2zm10.25-1.7h7.05v-9.558L12.099 3.54l-.1-.086-.098.087-7.801 6.8v9.56h7.05v-4.8c0-.11.09-.2.2-.2h1.3c.11 0 .2.09.2.2z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HomeThin';
