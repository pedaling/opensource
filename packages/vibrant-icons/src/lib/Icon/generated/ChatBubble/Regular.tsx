import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.449 17.828v3.622h-3.625l.002-.001A11.05 11.05 0 0 1 12 23.099C5.87 23.1.9 18.13.9 12S5.87.9 12 .9 23.1 5.87 23.1 12c0 2.14-.606 4.137-1.654 5.832zM20.899 12c0-4.908-3.992-8.9-8.9-8.9-4.907 0-8.9 3.992-8.9 8.9 0 4.907 3.993 8.9 8.9 8.9a8.9 8.9 0 0 0 4.689-1.333l.508-.316 2.053-.001V17.2l.317-.51A8.87 8.87 0 0 0 20.9 12" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChatBubbleRegular';
