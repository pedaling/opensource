import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m10.4439 5.7499-3.33552-3.336L8.66389.858398 11.9999 4.1939l3.336-3.335502L16.8914 2.4139l-3.3355 3.336 3.3355 3.3355-1.556 1.556-3.3355-3.3355-3.33552 3.3355-1.556-1.556 3.33552-3.3355ZM7.94789 18.8144c1.2665-1.0965 1.796-1.724 1.796-2.7715v-.011c0-1.4445-1.22301-2.415-3.04351-2.415s-3.081 1.097-3.081 2.6675v.1485h1.996l.014-.154c.0305-.5915.453-.974 1.076-.974.5485 0 .931.3455.931.84v.011c0 .442-.15649.765-1.12599 1.622l-2.74451 2.4115-.034.0295v1.4885h6.10801v-1.715h-3.2765l1.38349-1.178h.00101Zm12.39301-1.0905v.0105c0 2.5365-1.31 4.1125-3.419 4.1125s-3.425-1.576-3.425-4.1125v-.0105c0-2.5335 1.3125-4.107 3.425-4.107s3.419 1.5735 3.419 4.107Zm-2.1925 0c0-1.5255-.436-2.3655-1.2265-2.3655s-1.232.862-1.232 2.3655v.0105c0 1.5065.449 2.371 1.232 2.371.783 0 1.2265-.864 1.2265-2.371v-.0105Zm-6.136 1.871c-.609 0-1.1045.4955-1.1045 1.104s.485 1.11 1.1045 1.11 1.1095-.4875 1.1095-1.11-.4875-1.104-1.1095-1.104Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX2Regular';
