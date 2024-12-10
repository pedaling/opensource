import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx1-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 7.306 8.665 10.64 7.109 9.085l3.335-3.335-3.335-3.336L8.664.858 12 4.194 15.336.858l1.556 1.556-3.336 3.336 3.336 3.335-1.556 1.556zm7.706 10.418v.01c0 2.506-1.291 4.063-3.37 4.063s-3.375-1.557-3.375-4.062v-.011c0-2.503 1.293-4.057 3.375-4.057s3.37 1.555 3.37 4.057m-2.093 0c0-1.558-.453-2.415-1.276-2.415s-1.282.88-1.282 2.415v.01c0 1.54.467 2.421 1.282 2.421s1.276-.86 1.276-2.42zM4.311 15.173v1.806l1.976-1.325v6.003h2.06v-7.85h-2.03zm6.648 4.472c-.581 0-1.054.473-1.054 1.054s.463 1.06 1.055 1.06 1.06-.465 1.06-1.06-.466-1.054-1.06-1.054" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PlaySpeedX1Fill';
