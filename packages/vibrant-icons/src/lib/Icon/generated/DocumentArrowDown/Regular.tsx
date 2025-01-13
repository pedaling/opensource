import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentarrowdown-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m16.6999 14.95-4.6999 4.15-4.70007-4.15 1.2-1.2 2.65007 2.61.0003-5.61h1.7l-.0003 5.61 2.6499-2.61z" />
      <Svg.Path
        clipRule="evenodd"
        d="m3.6499 23.0999c-.13807 0-.25-.1119-.25-.25v-21.7c0-.13807.11193-.249998.25-.249998h10.639l.0295.029002 6.2525 6.253996.029.0295v15.6375c0 .1381-.1119.25-.25.25zm9.75-19.977-.023-.023h-7.777v17.8h12.8v-12.7765l-.0235-.0235h-4.9765z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentArrowDownRegular';
