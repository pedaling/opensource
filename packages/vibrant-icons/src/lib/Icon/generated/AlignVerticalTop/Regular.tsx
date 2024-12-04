import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticaltop-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.2504 16.0999c-.6065 0-1.1-.4935-1.1-1.1v-8.5c0-.6065.4935-1.1 1.1-1.1h4c.6065 0 1.1.4935 1.1 1.1v8.5c0 .6065-.4935 1.1-1.1 1.1h-4Zm2.9-2.2v-6.3h-1.8v6.3h1.8ZM5.75039 21.5999c-.6065 0-1.1-.4935-1.1-1.1v-14c0-.6065.4935-1.1 1.1-1.1h4c.60651 0 1.10001.4935 1.10001 1.1v14c0 .6065-.4935 1.1-1.10001 1.1h-4Zm2.9-2.2v-11.8h-1.8v11.8h1.8ZM23.1004 1.8999H.900391v1.7H23.1004v-1.7Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlignVerticalTopRegular';
