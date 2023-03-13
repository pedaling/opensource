import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.9 11.8 10.3 3.05C10.25 3 10.25 3 10.2 3c-.1 0-.2.1-.2.2v5.2L2.3 3.05C2.25 3 2.25 3 2.2 3c-.1 0-.2.1-.2.2v17.6c0 .1.1.2.2.2.05 0 .05 0 .1-.05L10 15.6v5.2c0 .1.1.2.2.2.05 0 .05 0 .1-.05l12.6-8.75c.15-.1.15-.3 0-.4Zm-19.15 6V6.2L10 10.5v3l-6.25 4.3Zm8 0V6.2L20.1 12l-8.35 5.8Z" />
  </Svg>
);

Thin.iconType = 'Thin';
