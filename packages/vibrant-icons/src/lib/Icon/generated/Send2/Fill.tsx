import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'send2-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.25 22h.1l20.5-9.75c.2-.1.2-.35 0-.45L2.35 2h-.1c-.15 0-.3.15-.25.3l2.35 8.45h6.4c.15 0 .25.1.25.25v2c0 .15-.1.25-.25.25h-6.4L2 21.7c-.05.15.1.3.25.3" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'Send2Fill';
