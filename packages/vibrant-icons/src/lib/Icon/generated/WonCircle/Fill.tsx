import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'woncircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m6 12c0 .15-.1.25-.25.25h-1.6l-.85 3.05c-.05.1-.15.2-.25.2h-1.6c-.1 0-.2-.1-.25-.2l-.85-3.05h-.75l-.85 3.05c-.05.1-.15.2-.25.2H8.9c-.1 0-.2-.1-.25-.2l-.85-3.05H6.2c-.15 0-.25-.1-.25-.25v-1.5c0-.15.1-.25.25-.25h1.05l-.75-2.7c-.05-.15.1-.3.25-.3h1.5c.1 0 .2.1.25.2l.75 2.8h.85l.75-2.8c.05-.1.15-.2.25-.2h1.6c.1 0 .2.1.25.2l.75 2.8h.85l.75-2.8c.05-.1.15-.2.25-.2h1.5c.15 0 .3.15.25.3l-.75 2.7h1.05c.15 0 .25.1.25.25V13z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'WonCircleFill';
