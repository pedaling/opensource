import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'locationcurrent-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm1.25 19.4v-3.65c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v3.65c-3.7-.55-6.6-3.45-7.15-7.15h3.65c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H3.6c.55-3.7 3.45-6.6 7.15-7.15v3.65c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V3.6c3.7.55 6.6 3.45 7.15 7.15h-3.65c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h3.65c-.55 3.7-3.45 6.6-7.15 7.15Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'LocationCurrentRegular';
