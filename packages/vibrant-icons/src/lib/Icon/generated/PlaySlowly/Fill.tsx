import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playslowly-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m1.1 12.2 12.6 8.75c.05.05.05.05.1.05.1 0 .2-.1.2-.2v-5.2l7.7 5.35c.05.05.05.05.1.05.1 0 .2-.1.2-.2V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05L14 8.4V3.2c0-.1-.1-.2-.2-.2-.05 0-.05 0-.1.05L1.1 11.8c-.15.1-.15.3 0 .4" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PlaySlowlyFill';
