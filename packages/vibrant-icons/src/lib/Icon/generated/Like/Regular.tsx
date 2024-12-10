import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'like-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.5 8h-2.1c.15-.95.4-2 .45-3.05.05-.95 0-1.9-.6-2.7-.55-.8-1.5-1.25-2.5-1.25a2.9 2.9 0 0 0-1.65.5c-.85.5-1.35 1.4-1.5 2.35-.35 2-1.25 3.95-2.85 5.2C7.05 10.4 5 10.5 3 10.5h-.75c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h.8c.7 0 1.55 0 2.45-.1v6.6H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H15c3.85 0 7-3.15 7-7v-4.5C22 9.1 20.9 8 19.5 8m0 6.5c0 2.75-2.25 5-5 5H8v-7.2c.8-.3 1.55-.7 2.3-1.3 1.95-1.55 3.3-3.95 3.75-6.8.05-.3.2-.55.4-.65.1 0 .2-.05.3-.05.35 0 .65.25.75.6.1.25.05.55.05.85-.15 1.8-.5 3.55-1 5.25-.05.15.05.3.2.3h3.5c.7 0 1.25.55 1.25 1.25z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LikeRegular';
