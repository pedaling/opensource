import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volumemute-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M18.721 1.283a.25.25 0 0 1 .379.215v16.046l3.501 3.502a.25.25 0 0 1 0 .353l-1.202 1.202a.25.25 0 0 1-.354 0L1.4 2.955a.25.25 0 0 1 0-.354L2.6 1.4a.25.25 0 0 1 .354 0l4.25 4.25h4.24zM9.404 7.85l7.496 7.496V4.942l-4.845 2.907z"
      clipRule="evenodd"
    />
    <Svg.Path d="M15.453 20.009a.2.2 0 0 1-.142.341h-1.483a.25.25 0 0 1-.142-.045l-2.322-1.956H4.15a.25.25 0 0 1-.25-.25V8.456l2.2 2.2v5.493h5.493z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'VolumeMuteRegular';
