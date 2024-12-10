import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'message-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.15 10.9 22 4.35v-.6c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v.6l9.85 6.55q.15.075.3 0" />
    <Svg.Path d="M2.25 20.5h19.5c.15 0 .25-.1.25-.25V7.35l-9.85 6.55q-.15.075-.3 0L2 7.35v12.9c0 .15.1.25.25.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'MessageFill';
