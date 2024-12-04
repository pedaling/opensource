import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playfast-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.9 11.8 10.3 3.05C10.25 3 10.25 3 10.2 3c-.1 0-.2.1-.2.2v5.2L2.3 3.05C2.25 3 2.25 3 2.2 3c-.1 0-.2.1-.2.2v17.6c0 .1.1.2.2.2.05 0 .05 0 .1-.05L10 15.6v5.2c0 .1.1.2.2.2.05 0 .05 0 .1-.05l12.6-8.75c.15-.1.15-.3 0-.4ZM4.5 16.4V7.6l6.3 4.4-6.3 4.4Zm8 0V7.65L18.8 12l-6.3 4.4Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlayFastRegular';
