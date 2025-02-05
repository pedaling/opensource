import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bookmark-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.25 2H4.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25.05 0 .1 0 .1-.05L12 18l7.15 3.95c.05 0 .1.05.1.05.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'BookmarkFill';
