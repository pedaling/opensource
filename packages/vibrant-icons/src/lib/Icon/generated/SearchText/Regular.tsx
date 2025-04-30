import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'searchtext-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.8 5.1a.2.2 0 0 0 .2-.2V3.1a.2.2 0 0 0-.2-.2H2.2a.2.2 0 0 0-.2.2v1.8c0 .11.09.2.2.2z" />
    <Svg.Path
      fillRule="evenodd"
      d="M6.9 13.949a7.049 7.049 0 1 1 12.75 4.146l3.627 3.627-1.555 1.555-3.628-3.627A7.049 7.049 0 0 1 6.9 13.95m7.049-4.85a4.849 4.849 0 1 0 0 9.698 4.849 4.849 0 0 0 0-9.697"
      clipRule="evenodd"
    />
    <Svg.Path d="M7 9.4a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V7.6c0-.11.09-.2.2-.2h4.6c.11 0 .2.09.2.2zm-2.2 4.7a.2.2 0 0 0 .2-.2v-1.8a.2.2 0 0 0-.2-.2H2.2a.2.2 0 0 0-.2.2v1.8c0 .11.09.2.2.2z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'SearchTextRegular';
