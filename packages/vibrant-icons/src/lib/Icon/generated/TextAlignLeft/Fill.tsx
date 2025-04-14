import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'textalignleft-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.1499 15.6004V13.4004H21.8499V15.6004H2.1499ZM2.1499 10.6004V8.4004H13.8499V10.6004H2.1499ZM2.1499 5.60039V3.40039H21.8499V5.60039L2.1499 5.60039Z" />
    <Svg.Path d="M2.1499 18.4004V20.6004H13.8499V18.4004H2.1499Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TextAlignLeftFill';
