import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'web-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5m8.7 9.6h-3.85c-.1-2.95-.8-5.55-1.8-7.3 3.05 1.15 5.3 3.95 5.65 7.3M12 20.75c-1.05 0-2.9-2.95-3.1-7.9h6.2c-.2 4.95-2.05 7.9-3.1 7.9M8.9 11.1c.2-4.9 2.05-7.9 3.1-7.9s2.9 2.95 3.1 7.9zm.05-7.3c-1 1.75-1.7 4.35-1.8 7.3H3.3c.35-3.35 2.6-6.15 5.65-7.3M3.3 12.9h3.85c.1 2.95.8 5.55 1.8 7.3-3.05-1.15-5.3-3.95-5.65-7.3m11.75 7.3c1-1.75 1.7-4.35 1.8-7.3h3.85c-.35 3.35-2.6 6.15-5.65 7.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'WebThin';
