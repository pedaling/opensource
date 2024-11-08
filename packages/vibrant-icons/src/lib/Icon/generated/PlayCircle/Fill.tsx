import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playcircle-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.8484 4.1509C17.7519 2.0544 14.9649 0.899902 11.9999 0.899902C9.0349 0.899902 6.2479 2.0544 4.1509 4.1509C2.0544 6.2479 0.899902 9.0349 0.899902 11.9999C0.899902 14.9649 2.0544 17.7519 4.1509 19.8484C6.2474 21.9449 9.0349 23.0999 11.9999 23.0999C14.9649 23.0999 17.7519 21.9454 19.8484 19.8484C21.9449 17.7519 23.0999 14.9649 23.0999 11.9999C23.0999 9.0349 21.9454 6.2479 19.8484 4.1509ZM9.21231 16.5026C9.14568 16.5436 9.0599 16.4957 9.0599 16.4175V7.58235C9.0599 7.50412 9.14568 7.45618 9.21231 7.49718L16.3915 11.9147C16.4549 11.9538 16.4549 12.046 16.3915 12.0851L9.21231 16.5026Z" />
  </Svg>
);

Fill.iconType = 'Fill';
