import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.25 10.75h19.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25Zm0 10.75h19.5a.25.25 0 0 0 .25-.25V13.5a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v7.75c0 .138.112.25.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
