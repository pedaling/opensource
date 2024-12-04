import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'belloff-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.0051 23C10.9006 23 10.0051 22.1046 10.0051 21C10.0051 19.8954 10.9006 19 12.0051 19C13.1097 19 14.0051 19.8954 14.0051 21C14.0051 22.1046 13.1097 23 12.0051 23Z" />
    <Svg.Path d="M4.50515 9.75V15H3.25515C3.10515 15 3.00515 15.1 3.00515 15.25V17.25C3.00515 17.4 3.10515 17.5 3.25515 17.5H12.2551L4.50515 9.75Z" />
    <Svg.Path d="M2.05508 3.5L3.50508 2.05C3.60508 1.95 3.75508 1.95 3.85508 2.05L5.90508 4.1C7.30508 2.25 9.50508 1 12.0051 1C16.1051 1 19.5051 4.4 19.5051 8.5V15H20.7551C20.9051 15 21.0051 15.1 21.0051 15.25V17.25C21.0051 17.4 20.9051 17.5 20.7551 17.5H19.2551L21.9051 20.15C22.0051 20.25 22.0051 20.4 21.9551 20.5L20.5051 21.95C20.4051 22.05 20.2551 22.05 20.1551 21.95L2.05508 3.85C2.00508 3.75 2.00508 3.6 2.05508 3.5Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'BellOffFill';
