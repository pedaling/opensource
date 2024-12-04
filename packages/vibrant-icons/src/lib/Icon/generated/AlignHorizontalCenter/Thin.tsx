import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignhorizontalcenter-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.4004 22.3499v-3.25H7.25039c-.469 0-.85-.381-.85-.85v-4c0-.469.381-.85.85-.85h4.15001v-2.8H4.00039c-.469 0-.85-.381-.85-.85v-4c0-.469.381-.85.85-.85h7.40001v-3.25h1.2v3.25h7.4c.469 0 .85.381.85.85v4c0 .469-.381.85-.85.85h-7.4v2.8h4.15c.469 0 .85.381.85.85v4c0 .469-.381.85-.85.85h-4.15v3.25h-1.2Zm-3.30001-4.95h7.80001v-2.3H8.10039v2.3Zm-3.25-8.5H19.1504v-2.3H4.85039v2.3Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignHorizontalCenterThin';
