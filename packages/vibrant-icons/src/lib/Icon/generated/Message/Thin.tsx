import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'message-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 3.5H2.25c-.15 0-.25.1-.25.25v16.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V3.75c0-.15-.1-.25-.25-.25Zm-18 15.25V7.25l8.1 5.4c.1.05.2.05.3 0l8.1-5.4v11.5H3.75ZM20.25 5.5l-8.1 5.4c-.1.05-.2.05-.3 0l-8.1-5.35v-.3h16.5v.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'MessageThin';
