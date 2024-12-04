import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sorting-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m7.2 21.9 4.75-4.75c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0l-2.8 2.8v-16c0-.15-.1-.25-.25-.25H6.4c-.15 0-.25.1-.25.25v16l-2.8-2.8c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l4.75 4.75c.05.15.25.15.35 0Zm9.6-19.8-4.75 4.75c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0l2.8-2.8v16c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25v-16l2.8 2.8c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35L17.15 2.1c-.05-.15-.25-.15-.35 0Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SortingThin';
