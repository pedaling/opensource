import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondown-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.55 8.4 4 7c.1-.1.25-.1.35 0L12 14.65 19.65 7c.1-.1.25-.1.35 0l1.4 1.4c.1.1.1.25 0 .35L12.15 18c-.1.1-.25.1-.35 0L2.55 8.75a.43.43 0 0 1 0-.35" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronDownFill';
