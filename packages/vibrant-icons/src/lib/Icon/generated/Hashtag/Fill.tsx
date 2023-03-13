import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m20.3 9.3.4-2c.05-.15-.1-.3-.25-.3h-2.7l.95-4.7c0-.15-.1-.3-.25-.3h-2c-.1 0-.2.1-.25.2L15.25 7h-4.5l.95-4.7c0-.15-.1-.3-.25-.3h-2c-.1 0-.2.1-.25.2L8.25 7h-2.8c-.1 0-.2.1-.25.2l-.4 2c0 .15.1.3.25.3h2.7l-1 5h-2.8c-.1 0-.2.1-.25.2l-.4 2c0 .15.1.3.25.3h2.7l-.95 4.7c-.05.15.1.3.25.3h2c.1 0 .2-.1.25-.2l.95-4.8h4.5l-.95 4.7c-.05.15.1.3.25.3h2c.1 0 .2-.1.25-.2l.95-4.8h2.8c.1 0 .2-.1.25-.2l.4-2c.05-.15-.1-.3-.25-.3h-2.7l1-5h2.8c.1 0 .2-.1.25-.2Zm-6.55 5.2h-4.5l1-5h4.5l-1 5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
