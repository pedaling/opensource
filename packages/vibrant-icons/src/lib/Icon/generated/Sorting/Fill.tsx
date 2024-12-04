import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sorting-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m11.9 16.8-1.4-1.4c-.1-.1-.25-.1-.35 0l-1.9 1.9V2.75c0-.15-.1-.25-.25-.25H6c-.15 0-.25.1-.25.25V17.3l-1.9-1.9c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35l4.75 4.75c.1.1.25.1.35 0l4.75-4.75c.05-.05.05-.25-.05-.35Zm10.05-9.6L20.5 8.6c-.1.1-.25.1-.35 0l-1.9-1.9v14.55c0 .15-.1.25-.25.25h-2c-.15 0-.25-.1-.25-.25V6.7l-1.9 1.9c-.1.1-.25.1-.35 0l-1.4-1.4c-.1-.1-.1-.25 0-.35l4.75-4.75c.1-.1.25-.1.35 0l4.75 4.75c.05.05.05.25 0 .35Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SortingFill';
