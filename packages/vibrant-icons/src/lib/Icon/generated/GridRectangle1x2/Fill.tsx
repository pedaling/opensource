import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gridrectangle1x2-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.25 10.75h19.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25m0 10.75h19.5a.25.25 0 0 0 .25-.25V13.5a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'GridRectangle1x2Fill';
