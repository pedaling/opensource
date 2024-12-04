import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronup-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21.45 15.595-1.45 1.4c-.1.1-.25.1-.35 0L12 9.345l-7.65 7.65c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25-.05-.35l9.3-9.25c.1-.1.25-.1.35 0l9.25 9.25c.05.1.05.25 0 .35Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronUpRegular';
