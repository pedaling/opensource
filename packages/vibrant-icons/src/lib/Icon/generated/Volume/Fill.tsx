import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'volume-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M7.2199 18.3504H.899902V5.65043H7.2199l7.38-4.835V23.1854l-7.38-4.835Zm11.3565.3675.0705-.071c1.7755-1.776 2.7535-4.1365 2.7535-6.6465 0-2.50997-.978-4.87097-2.7535-6.64647l-.0705-.071 1.5555-1.5555.071.0705c2.191 2.191 3.3975 5.104 3.3975 8.20247 0 3.0985-1.2065 6.011-3.3975 8.2025l-.071.0705-1.5555-1.5555Zm-2.8285-2.8285.0705-.071c1.02-1.0195 1.5815-2.376 1.5815-3.8185s-.5615-2.79897-1.5815-3.81847l-.0705-.071 1.5555-1.5555.071.0705c1.4355 1.4355 2.226 3.344 2.226 5.37397 0 2.03-.7905 3.939-2.226 5.374l-.071.0705-1.5555-1.5555v.001Z" />
  </Svg>
);

Fill.iconType = 'Fill';
