import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 2.75c1.25 0 2.25 1 2.25 2.25v5.5c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25V5c0-1.25 1-2.25 2.25-2.25ZM12 1C9.8 1 8 2.8 8 5v5.5c0 2.2 1.8 4 4 4s4-1.8 4-4V5c0-2.2-1.8-4-4-4Z" />
    <Svg.Path d="M8 22v-1.75h3.1V18.1l-.3-.05c-3.5-.6-6.25-3.55-6.4-7.55h1.75c.05 3.4 2.75 5.85 5.9 5.85.2 0 .4 0 .55-.05 2.8-.25 5.15-2.6 5.3-5.85h1.75c-.1 3.9-2.9 6.95-6.45 7.55l-.3.05v2.15H16V22H8Z" />
  </Svg>
);

Thin.iconType = 'Thin';
