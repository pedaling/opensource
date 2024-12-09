import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'home-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.65 21.85a.2.2 0 0 0 .2-.2V9.545a.2.2 0 0 0-.069-.15L12.131.982a.2.2 0 0 0-.263 0l-9.65 8.413a.2.2 0 0 0-.068.15V21.65c0 .11.09.2.2.2h8.35a.2.2 0 0 0 .2-.2v-6.8c0-.11.09-.2.2-.2h1.8c.11 0 .2.09.2.2v6.8c0 .11.09.2.2.2z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HomeFill';
