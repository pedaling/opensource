import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'video-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.3499 21.8504C2.23945 21.8504 2.1499 21.7609 2.1499 21.6504V2.35039C2.1499 2.23993 2.23945 2.15039 2.3499 2.15039H21.6499C21.7604 2.15039 21.8499 2.23993 21.8499 2.35039V21.6504C21.8499 21.7609 21.7604 21.8504 21.6499 21.8504H2.3499ZM19.6499 19.6504V4.35039H4.3499V19.6504H19.6499ZM9.3999 8.00035C9.3999 7.92211 9.48568 7.87418 9.55231 7.91518L16.0525 11.9152C16.116 11.9543 16.116 12.0465 16.0525 12.0856L9.55231 16.0856C9.48568 16.1266 9.3999 16.0787 9.3999 16.0004V8.00035Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'VideoRegular';
