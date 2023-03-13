import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M19.75 4.25a4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-10.3 10.3c-.1.1-.15.2-.15.3l-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8c.1 0 .2-.05.3-.15l10.3-10.3a4.255 4.255 0 0 0 0-6ZM8.5 19.05l-2.55.35-1.35-1.35.35-2.55 8-8L16.5 11l-8 8.05ZM18.5 9l-.95.95L14 6.4l1-.9c.45-.45 1.1-.75 1.75-.75.65 0 1.3.25 1.75.75 1 .95 1 2.55 0 3.5Z" />
  </Svg>
);

Thin.iconType = 'Thin';
