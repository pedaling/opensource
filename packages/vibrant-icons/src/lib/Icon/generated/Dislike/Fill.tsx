import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'dislike-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22 9c0-3.85-3.15-7-7-7H8.25C8.1 2 8 2.1 8 2.25v11.9c0 .15.1.35.25.4.15.1.3.25.5.35 2.05 1.45 3.45 3.4 4 5.85.25 1.15.85 2.2 2.15 2.25 2.2 0 2.2-2.4 1.75-3.95-.25-.9-.9-3.05-.95-3.05h3.8c1.4 0 2.5-1.1 2.5-2.5V9ZM5.25 13.75h-3c-.15 0-.25-.1-.25-.25V2.25c0-.15.1-.25.25-.25h3c.15 0 .25.1.25.25V13.5c0 .15-.1.25-.25.25Z" />
  </Svg>
);

Fill.iconType = 'Fill';
