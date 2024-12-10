import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticaltop-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.25 16.1c-.606 0-1.1-.494-1.1-1.1V6.5c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1V15c0 .606-.493 1.1-1.1 1.1zm-8.5 5.5c-.606 0-1.1-.494-1.1-1.1v-14c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v14c0 .606-.493 1.1-1.1 1.1zM23.1 1.9H.9v1.7h22.2z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignVerticalTopFill';
