import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowleft-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 11.1H5.25l5.8-5.8c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L2.05 11.8c-.1.1-.1.25 0 .35L9.8 19.9c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-5.8-5.75h16.5c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.3-.25-.3" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ArrowLeftThin';
