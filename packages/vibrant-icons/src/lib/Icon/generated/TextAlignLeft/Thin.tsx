import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'textalignleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.5999 8.6499H2.3999V10.3499H13.5999V8.6499Z" />
    <Svg.Path d="M21.5999 3.6499H2.3999V5.3499H21.5999V3.6499Z" />
    <Svg.Path d="M21.5999 13.6499H2.3999V15.3499H21.5999V13.6499Z" />
    <Svg.Path d="M13.5999 18.6499H2.3999V20.3499H13.5999V18.6499Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextAlignLeftThin';
