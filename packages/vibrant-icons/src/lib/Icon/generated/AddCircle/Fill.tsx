import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'addcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m6 12c0 .15-.1.25-.25.25h-4.5v4.5c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25v-4.5h-4.5c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h4.5v-4.5c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25v4.5h4.5c.15 0 .25.1.25.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AddCircleFill';
