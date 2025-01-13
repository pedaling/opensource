import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documenttext-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m8.3999 14.9004v2.2h7.2v-2.2z" />
      <Svg.Path d="m8.3999 10.9004v2.2h7.2v-2.2z" />
      <Svg.Path
        clipRule="evenodd"
        d="m3.6499 23.1004c-.13807 0-.25-.1119-.25-.25v-21.70001c0-.13807.11193-.249999.25-.249999h10.639l.0295.029001 6.2525 6.253998.029.0295v15.63751c0 .1381-.1119.25-.25.25zm9.75-19.97701-.023-.023h-7.777v17.80001h12.8v-12.77651l-.0235-.0235h-4.9765z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentTextRegular';
