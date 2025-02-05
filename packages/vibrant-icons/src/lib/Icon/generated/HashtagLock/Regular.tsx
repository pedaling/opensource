import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="M10.5 2.25 9.844 6.9h5.75l.656-4.65h2.25l-.656 4.65h3.906l-.125 2.2h-4.091l-.162 1.15h-2.25l.162-1.15h-5.75l-.818 5.8h2.534v2.2H8.406l-.656 4.65H5.5l.656-4.65H2.25l.125-2.2h4.091l.818-5.8H3.125l.125-2.2h4.344l.656-4.65z" />
      <Svg.Path
        fillRule="evenodd"
        d="M20.85 14.9h1.25a.25.25 0 0 1 .25.25v6.45a.25.25 0 0 1-.25.25h-8.7a.25.25 0 0 1-.25-.25v-6.45a.25.25 0 0 1 .25-.25h1.25v-.4a3.1 3.1 0 1 1 6.2 0zm-.7 2.2h-4.8v2.55h4.8zm-1.5-2.2v-.4a.9.9 0 1 0-1.8 0v.4z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HashtagLockRegular';
