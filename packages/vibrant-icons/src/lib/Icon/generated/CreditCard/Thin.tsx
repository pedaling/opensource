import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.25 3.5H1.75c-.15 0-.25.1-.25.25v16.5c0 .15.1.25.25.25h20.5c.15 0 .25-.1.25-.25V3.75c0-.15-.1-.25-.25-.25Zm-1.5 1.75v3H3.25v-3h17.5Zm-17.5 13.5v-7h17.5v7H3.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
