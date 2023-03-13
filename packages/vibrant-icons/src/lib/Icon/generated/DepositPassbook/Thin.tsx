import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 3H4.65c-.1 0-.2.05-.2.2l-3.4 11.85C.8 16.05 1.5 17 2.5 17h2v2.5c0 .85.65 1.5 1.5 1.5h14.5c.85 0 1.5-.65 1.5-1.5V3.25c0-.15-.1-.25-.25-.25ZM2.8 15.25l2.95-10.5h14l-2.95 10.5h-14Zm3.45 4V17h10.7c.65 0 1.25-.45 1.45-1.05l1.85-6.65v10h-14v-.05Z" />
  </Svg>
);

Thin.iconType = 'Thin';
