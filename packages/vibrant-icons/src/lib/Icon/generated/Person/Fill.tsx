import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.9 21.75a.246.246 0 0 1-.247-.25c.13-5.157 4.235-9.35 9.347-9.35s9.218 4.193 9.347 9.35a.246.246 0 0 1-.247.25z" />
    <Svg.Path fillRule="evenodd" d="M6.9 6.25a5.1 5.1 0 1 1 10.2 0 5.1 5.1 0 0 1-10.2 0" clipRule="evenodd" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PersonFill';
