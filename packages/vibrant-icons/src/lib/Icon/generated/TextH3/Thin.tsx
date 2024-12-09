import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth3-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.75 2.5H12.5c-.15 0-.25.1-.25.25v8.4h-9.5v-8.4c0-.15-.1-.25-.25-.25H1.25c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25H2.5c.15 0 .25-.1.25-.25V12.9h9.5v8.4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.8c0-.2-.1-.3-.25-.3m2.95 16.45h1.45c.05 0 .1.05.1.1.1.6.7 1 1.55 1 .9 0 1.45-.5 1.45-1.2 0-.85-.6-1.3-1.6-1.3h-.85c-.05 0-.1-.05-.1-.1v-1.1c0-.05.05-.1.1-.1h.8c.85 0 1.45-.5 1.45-1.2s-.5-1.15-1.3-1.15c-.75 0-1.3.4-1.4 1.05 0 .05-.05.1-.1.1h-1.4c-.05 0-.1-.05-.1-.1.15-1.45 1.3-2.4 3-2.4 1.8 0 2.95.9 2.95 2.3 0 1.1-.75 1.8-1.7 2v.05c1.25.1 2.05.85 2.05 2.05 0 1.55-1.3 2.6-3.2 2.6-1.85 0-3.05-1-3.2-2.4-.05-.15 0-.2.05-.2" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextH3Thin';
