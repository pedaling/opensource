import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'arrowlefttoline-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.2 4.05 1.4 1.4c.1.1.1.25 0 .35l-4.9 4.9h12.05c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25H9.7l4.9 4.9c.1.1.1.25 0 .35l-1.4 1.4c-.1.1-.25.1-.35 0l-7.8-7.65c-.1-.1-.1-.25 0-.35l7.75-7.8c.1-.05.3-.05.4 0M2 4.25A.25.25 0 0 1 2.25 4h2a.25.25 0 0 1 .25.25v15.5a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ArrowLeftToLineFill';
