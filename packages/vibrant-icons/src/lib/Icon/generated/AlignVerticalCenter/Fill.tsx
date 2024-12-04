import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalcenter-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.7502 21.0999c-.6065 0-1.1-.4935-1.1-1.1v-7.15H.950195v-1.7H4.6502v-7.15c0-.6065.4935-1.1 1.1-1.1h4c.6065 0 1.1.4935 1.1 1.1v7.15h2.3v-3.9c0-.6065.4935-1.1 1.1-1.1h4c.6065 0 1.1.4935 1.1 1.1v3.9h3.8v1.7h-3.8v3.9c0 .6065-.4935 1.1-1.1 1.1h-4c-.6065 0-1.1-.4935-1.1-1.1v-3.9h-2.3v7.15c0 .6065-.4935 1.1-1.1 1.1h-4Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignVerticalCenterFill';
