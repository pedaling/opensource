import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtag-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="m9.844 6.9.656-4.65H8.25L7.594 6.9H3.25l-.125 2.2h4.159l-.818 5.8H2.375l-.125 2.2h3.906L5.5 21.75h2.25l.656-4.65h5.75l-.656 4.65h2.25l.656-4.65h4.344l.125-2.2h-4.159l.818-5.8h4.091l.125-2.2h-3.906l.656-4.65h-2.25l-.656 4.65zm4.622 8 .818-5.8h-5.75l-.818 5.8z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HashtagRegular';
