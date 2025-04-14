import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'text-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.7993 5.0504H5.04993V6.6509C5.04993 6.76136 4.96043 6.8509 4.84998 6.8509H2.84998C2.73952 6.8509 2.6499 6.76136 2.6499 6.6509V2.8499C2.6499 2.73944 2.98952 2.6499 2.84998 2.6499H21.1493C21.2598 2.6499 21.3494 2.73944 21.3494 2.8499V6.6509C21.3494 6.76136 21.2598 6.8509 21.1493 6.8509H19.1493C19.0388 6.8509 18.9493 6.76136 18.9493 6.6509V5.0504H13.2V18.9499H14.6493C14.7597 18.9499 14.85 19.0394 14.85 19.1499V21.1504C14.85 21.2609 14.7604 21.3504 14.6499 21.3504H9.34998C9.23952 21.3504 9.14929 21.2609 9.14929 21.1504V19.1499C9.14929 19.0394 9.23891 18.9499 9.34937 18.9499H10.7993V5.0504Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TextRegular';
