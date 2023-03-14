import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'play-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.75 6.2 17.1 12l-8.35 5.8V6.2ZM7.2 3c-.1 0-.2.1-.2.2v17.6c0 .1.1.2.2.2.05 0 .05 0 .1-.05l12.6-8.75c.15-.1.15-.3 0-.4L7.3 3.05C7.25 3 7.25 3 7.2 3Z" />
  </Svg>
);

Thin.iconType = 'Thin';
