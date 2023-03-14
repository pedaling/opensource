import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'send2-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.85 11.75 2.35 2h-.1c-.15 0-.3.15-.25.3L4.7 12 2 21.7c-.05.15.1.3.25.3h.1l20.5-9.75c.2-.1.2-.4 0-.5ZM4.6 19l1.7-6.1h4.45c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25H6.3L4.6 5l14.7 7-14.7 7Z" />
  </Svg>
);

Thin.iconType = 'Thin';
