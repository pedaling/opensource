import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pausecircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m-1.25 14.75c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-7.5c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25zm5 0c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-7.5c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PauseCircleFill';
