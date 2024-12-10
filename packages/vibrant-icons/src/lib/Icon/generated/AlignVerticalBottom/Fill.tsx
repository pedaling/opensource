import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalbottom-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.25 18.6c-.606 0-1.1-.494-1.1-1.1V9c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v8.5c0 .606-.493 1.1-1.1 1.1zm-8.5 0c-.606 0-1.1-.494-1.1-1.1v-14c0-.607.494-1.1 1.1-1.1h4c.607 0 1.1.493 1.1 1.1v14c0 .606-.493 1.1-1.1 1.1zm17.35 1.8H.9v1.7h22.2z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlignVerticalBottomFill';
