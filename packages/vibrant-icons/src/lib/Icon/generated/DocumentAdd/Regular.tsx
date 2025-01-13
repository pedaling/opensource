import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'documentadd-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m3.6499.900391c-.13807 0-.25.111929-.25.249999v21.70001c0 .1381.11193.25.25.25h10.1001v-2.2h-8.1501v-17.80001h7.777l.023.023v4.977h4.9765l.0235.0235v4.87611h2.2v-5.78711l-.029-.0295-6.2525-6.253998-.0295-.029001z" />
      <Svg.Path d="m18.2749 20.4754v3.125h2.2v-3.125h3.125v-2.2h-3.125v-3.125h-2.2v3.125h-3.125v2.2z" />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentAddRegular';
