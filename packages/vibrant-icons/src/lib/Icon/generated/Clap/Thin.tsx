import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clap-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.35 2.75c.5 0 .9.4.9.9v6.85c0 .5.4.85.85.85h.15c.45-.05.75-.45.75-.9V4.6c0-.5.4-.9.85-.9.5 0 .9.4.9.9v5.9c0 .5.4.85.85.85.5 0 .85-.4.85-.85v-3c0-.5.4-.9.85-.9.5 0 .9.4.9.9V14c0 4-3.25 7.25-7.25 7.25-3.35 0-6.15-2.3-7-5.35l-1.2-4.45c-.15-.5.2-1.05.75-1.1h.1c.4 0 .75.3.85.7l.75 2.65c.05.15.2.3.4.3s.4-.2.4-.4v-9c0-.5.4-.9.85-.9.5 0 .9.4.9.9v5.9c0 .5.4.85.85.85.5 0 .85-.4.85-.85V3.6c.05-.45.45-.85.9-.85m0-1.75c-.95 0-1.8.55-2.25 1.3-.35-.2-.8-.3-1.25-.3-1.45 0-2.6 1.2-2.6 2.6v4c-.2-.05-.4-.05-.6-.05H4.4c-.75.1-1.45.5-1.9 1.1-.45.65-.6 1.45-.4 2.15l1.2 4.45C4.35 20.25 7.95 23 12 23c4.95 0 9-4.05 9-9V7.5c0-1.45-1.2-2.6-2.6-2.6-.3 0-.6.05-.85.15V4.6C17.5 3.2 16.3 2 14.85 2c-.45 0-.85.1-1.25.3-.4-.75-1.25-1.3-2.25-1.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ClapThin';
