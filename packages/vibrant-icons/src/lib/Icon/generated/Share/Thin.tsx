import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'share-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m19.45 9.7-.9.9c-.1.1-.25.1-.35 0l-5.3-5.35v11.5c0 .15-.1.25-.25.25H11.4c-.15 0-.25-.1-.25-.25V5.25l-5.35 5.3c-.1.1-.25.1-.35 0l-.9-.9c-.1-.1-.1-.25 0-.35l7.25-7.25c.1-.1.25-.1.35 0L19.4 9.3c.1.1.1.3.05.4Zm2.3 7.3H20.5c-.15 0-.25.1-.25.25v3H3.75v-3c0-.15-.1-.25-.25-.25H2.25c-.15 0-.25.1-.25.25v4.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-4.5c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ShareThin';
