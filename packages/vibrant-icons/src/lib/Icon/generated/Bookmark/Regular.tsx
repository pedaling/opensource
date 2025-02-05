import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bookmark-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M4.5 21.75c0 .087.033.156.09.2q.063.049.16.05c.05 0 .1 0 .1-.05L12 18l7.15 3.95c.05 0 .1.05.1.05.15 0 .25-.1.25-.25V2.25c0-.15-.1-.25-.25-.25H4.75c-.15 0-.25.1-.25.25zm12.7-3.505V4.3H6.8v13.945l5.2-2.873z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'BookmarkRegular';
