import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'undo-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.05 4H7.1V2.25c0-.2-.2-.3-.35-.2l-4.6 3c-.15.1-.15.3 0 .4l4.6 3c.15.1.35 0 .35-.2V6.5h6.95c1.6 0 3.15.65 4.3 1.8 1.55 1.6 2.1 3.8 1.3 5.95-.9 2.3-3.2 3.75-5.65 3.75H5.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25h9c4.5 0 8.2-3.65 8.25-8.15.05-4.6-3.85-8.35-8.45-8.35" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'UndoFill';
