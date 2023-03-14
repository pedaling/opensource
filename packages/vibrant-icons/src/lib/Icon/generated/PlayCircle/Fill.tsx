import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playcircle-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm4.15 11.2-2.9 1.9-2.8 1.85c-.15.1-.4 0-.4-.2v-7.5c0-.2.25-.3.4-.2l2.8 1.85 2.9 1.9c.15.1.15.3 0 .4Z" />
  </Svg>
);

Fill.iconType = 'Fill';
