import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'search-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m22.45 20.7-5.15-5.15A8.41 8.41 0 0 0 19 10.5C19 5.8 15.2 2 10.5 2S2 5.8 2 10.5 5.8 19 10.5 19c1.9 0 3.65-.65 5.05-1.7l5.15 5.15c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35ZM4.5 10.5c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SearchFill';
