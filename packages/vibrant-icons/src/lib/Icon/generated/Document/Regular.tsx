import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'document-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m3.6499.900391c-.13807 0-.25.111929-.25.249999v21.70001c0 .1381.11193.25.25.25h16.7c.1381 0 .25-.1119.25-.25v-15.63751l-.029-.0295-6.2525-6.253998-.0295-.029001zm9.727 2.199999.023.023v4.977h4.9765l.0235.0235v12.77651h-12.8v-17.80001z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'DocumentRegular';
