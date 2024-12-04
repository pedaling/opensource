import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.4489 17.8279L21.4499 21.4499L17.8244 21.4509L17.8264 21.4489C16.1329 22.4954 14.1369 23.0999 11.9999 23.0999C5.8694 23.0999 0.899902 18.1304 0.899902 11.9999C0.899902 5.8694 5.8694 0.899902 11.9999 0.899902C18.1304 0.899902 23.0999 5.8694 23.0999 11.9999C23.0999 14.1389 22.4944 16.1364 21.4459 17.8309L21.4489 17.8279ZM20.8999 11.9999C20.8999 7.0924 16.9074 3.0999 11.9999 3.0999C7.0924 3.0999 3.0999 7.0924 3.0999 11.9999C3.0999 16.9074 7.0924 20.8999 11.9999 20.8999C13.6624 20.8999 15.2834 20.4389 16.6879 19.5669L17.1964 19.2509L19.2494 19.2499V17.1994L19.5659 16.6899C20.4389 15.2854 20.8999 13.6639 20.8999 11.9999Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChatBubbleRegular';
