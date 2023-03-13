import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 4.8C19.55 3.6 18 3 16.45 3c-1.55 0-3.1.6-4.3 1.8-.05.05-.1.15-.15.2a.69.69 0 0 1-.15-.2C10.65 3.6 9.1 3 7.55 3c-1.55 0-3.1.6-4.3 1.8-2.35 2.4-2.35 6.35 0 8.75 2.35 2.4 8.55 8.35 8.55 8.35.05.1.15.1.2.1.05 0 .15 0 .15-.05 0 0 6.2-5.95 8.55-8.35 2.35-2.4 2.4-6.35.05-8.8ZM12 7.35c.35 0 .45-.4.75-.8 1.6-1.85 4.25-2.4 6.25-.9 1.3 1 1.95 2.75 1.65 4.35-.3 1.7-1.75 2.9-3 4.2-.65.65-5.65 5.4-5.65 5.4s-5-4.75-5.65-5.4c-1.25-1.25-2.7-2.5-3-4.2-.3-1.6.35-3.4 1.65-4.35 2-1.5 4.65-1 6.2.9.35.4.45.8.8.8Z" />
  </Svg>
);

Thin.iconType = 'Thin';
