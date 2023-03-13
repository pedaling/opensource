import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'checkcircle',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm5.75 8.85-6.6 6.6c-.1.1-.25.1-.35 0l-4.7-4.7c-.1-.1-.1-.25 0-.35L7.5 10c.1-.1.25-.1.35 0l3.1 3.1 5-5c.1-.1.25-.1.35 0l1.4 1.4c.15.1.15.25.05.35Z" />
  </Svg>
);

Fill.iconType = 'Fill';
