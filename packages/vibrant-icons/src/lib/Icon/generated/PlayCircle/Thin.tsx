import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9999 22.8499C9.1019 22.8499 6.3769 21.7209 4.3274 19.6724C2.2784 17.6229 1.1499 14.8984 1.1499 11.9999C1.1499 9.1014 2.2789 6.3769 4.3274 4.3274C6.3769 2.2789 9.1019 1.1499 11.9999 1.1499C14.8979 1.1499 17.6229 2.2789 19.6724 4.3274C21.7214 6.3769 22.8499 9.1014 22.8499 11.9999C22.8499 14.8984 21.7209 17.6229 19.6724 19.6724C17.6229 21.7214 14.8984 22.8499 11.9999 22.8499ZM11.9999 2.8499C6.9544 2.8499 2.8499 6.9544 2.8499 11.9999C2.8499 17.0454 6.9544 21.1499 11.9999 21.1499C17.0454 21.1499 21.1499 17.0454 21.1499 11.9999C21.1499 6.9544 17.0454 2.8499 11.9999 2.8499ZM9.6499 8.44735C9.6499 8.36912 9.73568 8.32119 9.80231 8.36219L15.5755 11.9147C15.639 11.9538 15.639 12.046 15.5755 12.0851L9.80231 15.6376C9.73568 15.6786 9.6499 15.6307 9.6499 15.5525V8.44735Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PlayCircleThin';
