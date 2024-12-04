import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'home-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.59991 21.6005C2.48945 21.6005 2.3999 21.511 2.3999 21.4005V9.65948C2.3999 9.60168 2.42491 9.5467 2.46848 9.50872L11.8685 1.31408C11.9438 1.24842 12.056 1.24842 12.1313 1.31408L21.5313 9.50872C21.5749 9.5467 21.5999 9.60168 21.5999 9.65948V21.4C21.5999 21.5105 21.5104 21.6 21.3999 21.6L2.59991 21.6005ZM12.8499 19.9005H19.8999V10.3415L12.0989 3.5405L11.9999 3.4545L11.9009 3.5405L4.0999 10.3415V19.9005H11.1499V15.1005C11.1499 14.9901 11.2394 14.9005 11.3499 14.9005H12.6499C12.7604 14.9005 12.8499 14.9901 12.8499 15.1005V19.9005Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HomeThin';
