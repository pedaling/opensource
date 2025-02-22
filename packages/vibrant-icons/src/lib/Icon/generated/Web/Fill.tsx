import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'web-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.15 1.9C5.1 3.05 2 6.55 1.55 10.9H6.4c.15-3.95 1.2-7.2 2.75-9m5.7 20.2c4.05-1.15 7.1-4.65 7.6-8.95H17.6c-.15 3.9-1.2 7.15-2.75 8.95m7.6-11.2c-.45-4.3-3.5-7.8-7.6-8.95C16.4 3.75 17.4 7 17.6 10.9zm-20.9 2.2c.45 4.3 3.5 7.8 7.6 8.95C7.6 20.25 6.6 17 6.4 13.1zM12 2.6c-1.3 0-3.1 3.2-3.35 8.25h6.7C15.1 5.8 13.3 2.6 12 2.6m0 18.8c1.3 0 3.1-3.2 3.35-8.25h-6.7C8.9 18.2 10.7 21.4 12 21.4" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'WebFill';
