import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m9.844 6.9.656-4.65H8.25L7.594 6.9H3.25l-.125 2.2h4.159l-.818 5.8H2.375l-.125 2.2h3.906L5.5 21.75h2.25l.656-4.65h2.844v-2.2H8.716l.818-5.8h5.75l-.162 1.15h2.25l.162-1.15h4.091l.125-2.2h-3.906l.656-4.65h-2.25l-.656 4.65z" />
      <Svg.Path
        fillRule="evenodd"
        d="M14.65 14.5a3.1 3.1 0 1 1 6.2 0v.4h1.25a.25.25 0 0 1 .25.25v6.45a.25.25 0 0 1-.25.25h-8.7a.25.25 0 0 1-.25-.25v-6.45a.25.25 0 0 1 .25-.25h1.25zm4 0v.4h-1.8v-.4a.9.9 0 1 1 1.8 0"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HashtagLockFill';
