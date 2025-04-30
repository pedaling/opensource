import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21.449 17.828-.002.001A11.05 11.05 0 0 0 23.1 12C23.1 5.87 18.13.9 12 .9S.9 5.87.9 12 5.87 23.1 12 23.1c2.136 0 4.13-.603 5.823-1.649h3.627z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChatBubbleFill';
