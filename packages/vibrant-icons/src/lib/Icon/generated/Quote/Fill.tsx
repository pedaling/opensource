import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'quote-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.85 9.95C6.2 8.5 8.4 7 10.05 6.25c.1-.05.15-.2.1-.3l-.75-1.8c-.05-.15-.2-.2-.35-.15-3.15 1.45-5.85 4.1-6.8 7.55-1 3.85 1.1 7.45 4.8 7.45 2.3 0 4.45-2.05 4.45-4.55 0-2.95-2.6-5.15-5.65-4.5Zm10.5 0c.35-1.45 2.55-2.95 4.2-3.7.1-.05.15-.2.1-.3l-.75-1.8c-.05-.15-.2-.2-.35-.15-3.15 1.45-5.85 4.1-6.8 7.55-1 3.85 1.1 7.45 4.8 7.45 2.3 0 4.45-2.05 4.45-4.55 0-2.95-2.6-5.15-5.65-4.5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
