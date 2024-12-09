import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtag-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M9.372 7.15 10 2.25H8.25l-.628 4.9H3.253l-.128 1.7h4.279l-.808 6.3H2.378l-.128 1.7h4.128l-.628 4.9H7.5l.628-4.9h6.5L14 21.75h1.75l.628-4.9h4.369l.128-1.7h-4.279l.808-6.3h4.218l.128-1.7h-4.128l.628-4.9H16.5l-.628 4.9zm5.474 8 .808-6.3h-6.5l-.808 6.3z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HashtagThin';
