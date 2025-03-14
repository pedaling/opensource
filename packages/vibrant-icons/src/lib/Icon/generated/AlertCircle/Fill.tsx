import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alertcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m-1.25 5.6c0-.05.05-.1.1-.1h2.3c.05 0 .1.05.1.1v6.8c0 .05-.05.1-.1.1h-2.3c-.05 0-.1-.05-.1-.1zM12 18c-.85 0-1.5-.65-1.5-1.5S11.15 15 12 15s1.5.65 1.5 1.5S12.85 18 12 18" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlertCircleFill';
