import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.444 5.75 7.108 2.414 8.664.858 12 4.194 15.336.858l1.555 1.556-3.335 3.336 3.335 3.335-1.556 1.556L12 7.306 8.664 10.64 7.108 9.085zM7.948 18.814c1.266-1.096 1.796-1.724 1.796-2.771v-.011c0-1.445-1.223-2.415-3.044-2.415s-3.08 1.097-3.08 2.667v.149h1.995l.014-.154c.03-.592.453-.974 1.076-.974.549 0 .931.345.931.84v.01c0 .443-.156.766-1.126 1.623l-2.744 2.411-.034.03v1.488H9.84v-1.715H6.563l1.384-1.178m12.393-1.09v.01c0 2.537-1.31 4.113-3.42 4.113s-3.424-1.576-3.424-4.113v-.01c0-2.534 1.312-4.107 3.425-4.107s3.419 1.573 3.419 4.107m-2.193 0c0-1.526-.436-2.366-1.226-2.366s-1.232.862-1.232 2.366v.01c0 1.507.449 2.371 1.232 2.371s1.226-.864 1.226-2.37zm-6.136 1.87c-.609 0-1.104.496-1.104 1.105s.485 1.11 1.104 1.11 1.11-.488 1.11-1.11-.488-1.104-1.11-1.104" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX2Regular';
