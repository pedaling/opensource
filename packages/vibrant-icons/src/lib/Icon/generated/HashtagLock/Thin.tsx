import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtaglock-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m10 2.25-.628 4.9h6.5l.628-4.9h1.75l-.628 4.9h4.128l-.128 1.7h-4.218l-.212 1.65h-1.75l.212-1.65h-6.5l-.808 6.3h3.404v1.7H8.128l-.628 4.9H5.75l.628-4.9H2.25l.128-1.7h4.218l.808-6.3H3.125l.128-1.7h4.369l.628-4.9z" />
      <Svg.Path
        fillRule="evenodd"
        d="M20.6 15.15h1.25a.25.25 0 0 1 .25.25v6.2a.25.25 0 0 1-.25.25h-8.2a.25.25 0 0 1-.25-.25v-6.2a.25.25 0 0 1 .25-.25h1.25v-.65a2.85 2.85 0 0 1 5.7 0zm-.2 1.7h-5.3v3.3h5.3zm-1.5-1.7v-.65a1.15 1.15 0 1 0-2.3 0v.65z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HashtagLockThin';
