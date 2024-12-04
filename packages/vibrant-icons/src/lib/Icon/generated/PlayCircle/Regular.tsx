import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9999 23.0999C9.0349 23.0999 6.2479 21.9454 4.1509 19.8484C2.0544 17.7519 0.899902 14.9649 0.899902 11.9999C0.899902 9.0349 2.0544 6.2479 4.1509 4.1509C6.2479 2.0544 9.0349 0.899902 11.9999 0.899902C14.9649 0.899902 17.7519 2.0544 19.8484 4.1509C21.9449 6.2474 23.0999 9.0349 23.0999 11.9999C23.0999 14.9649 21.9454 17.7519 19.8484 19.8484C17.7519 21.9449 14.9649 23.0999 11.9999 23.0999ZM11.9999 3.0999C7.0924 3.0999 3.0999 7.0924 3.0999 11.9999C3.0999 16.9074 7.0924 20.8999 11.9999 20.8999C16.9074 20.8999 20.8999 16.9074 20.8999 11.9999C20.8999 7.0924 16.9074 3.0999 11.9999 3.0999ZM9.3999 7.99986C9.3999 7.92162 9.48568 7.87369 9.55231 7.91469L16.0525 11.9147C16.116 11.9538 16.116 12.046 16.0525 12.0851L9.55231 16.0851C9.48568 16.1261 9.3999 16.0782 9.3999 15.9999V7.99986Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlayCircleRegular';
