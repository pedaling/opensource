import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleft-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.1 2.55 16.5 4c.1.1.1.25 0 .35L8.85 12l7.65 7.65c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0L5.5 12.15c-.1-.1-.1-.25 0-.35l9.25-9.25c.1-.05.25-.05.35 0" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronLeftFill';
