import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'home-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.3499 21.85C2.23945 21.85 2.1499 21.7605 2.1499 21.65V9.49986C2.1499 9.47103 2.16229 9.44359 2.1839 9.42452L11.9339 0.924518C11.9718 0.891778 12.028 0.891778 12.0659 0.924518L21.7813 9.39473C21.8249 9.43272 21.8499 9.48769 21.8499 9.54549V21.65C21.8499 21.7605 21.7604 21.85 21.6499 21.85H2.3499ZM19.6499 19.65V10.4555L11.9999 3.78602L4.3499 10.4555V19.65H10.8999V14.85C10.8999 14.7396 10.9894 14.65 11.0999 14.65H12.8999C13.0104 14.65 13.0999 14.7396 13.0999 14.85V19.65H19.6499Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HomeRegular';
