import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'thundercircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.7 6.9L14.3 14c-.05.15-.2.2-.3.15l-2.8-1.1L9.65 17c-.05.15-.2.2-.3.15L7.5 16.4c-.15-.05-.2-.2-.15-.3L9.7 10c.05-.15.2-.2.3-.15l2.8 1.1L14.35 7c.05-.15.2-.2.3-.15l1.85.75c.15.05.25.2.2.3Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ThunderCircleFill';
