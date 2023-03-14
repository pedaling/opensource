import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'heart-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 4.8C19.55 3.6 18 3 16.45 3c-1.55 0-3.1.6-4.3 1.8-.05.05-.1.15-.15.2a.69.69 0 0 1-.15-.2C10.65 3.6 9.1 3 7.55 3c-1.55 0-3.1.6-4.3 1.8-2.35 2.4-2.35 6.35 0 8.75 2.35 2.4 8.55 8.35 8.55 8.35.05.1.15.1.2.1.05 0 .15 0 .15-.05 0 0 6.2-5.95 8.55-8.35 2.35-2.4 2.4-6.35.05-8.8Z" />
  </Svg>
);

Fill.iconType = 'Fill';
