import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gear-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m21.75 16.6-1.1-.65c.55-1.2.9-2.55.9-3.95s-.3-2.75-.9-3.95l1.1-.65c.1-.05.15-.2.1-.35l-.6-1.1c-.05-.1-.2-.15-.35-.1l-1.15.65a9.44 9.44 0 0 0-6.85-3.95v-1.3c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v1.3a9.45 9.45 0 0 0-6.9 3.95l-1.1-.65a.264.264 0 0 0-.35.1l-.6 1.1c-.05.1-.05.25.1.35l1.1.65c-.6 1.2-.9 2.55-.9 3.95s.3 2.75.9 3.95l-1.1.65c-.1.05-.15.2-.1.35l.6 1.1c.05.1.2.15.35.1l1.1-.65a9.44 9.44 0 0 0 6.85 3.95v1.3c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-1.3c2.85-.25 5.3-1.75 6.85-3.95l1.1.65c.1.05.25.05.35-.1l.6-1.1c.15-.1.1-.25 0-.35M12 19.75c-4.25 0-7.75-3.5-7.75-7.75S7.75 4.25 12 4.25s7.75 3.5 7.75 7.75-3.5 7.75-7.75 7.75" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'GearThin';
