import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'archive-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M9.5 14.25v-2c0-.15.1-.25.25-.25h4.5c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-4.5c-.15 0-.25-.1-.25-.25" />
    <Svg.Path d="M22.75 2H1.25C1.1 2 1 2.1 1 2.25v7c0 .15.1.25.25.25H2v12.25c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V9.5h.75c.15 0 .25-.1.25-.25v-7c0-.15-.1-.25-.25-.25M19.5 19.5h-15v-10h15zm-16-15h17V7h-17z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ArchiveRegular';
