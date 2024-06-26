import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'video-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.7 2H2.25C2.1 2 2 2.1 2 2.25v19.5c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25V2.3c0-.15-.15-.3-.3-.3Zm-5.9 10.2-2.95 1.9L10 16c-.2.1-.4 0-.4-.2V8.2c0-.2.25-.3.4-.2l2.85 1.85 2.95 1.9c.15.15.15.35 0 .45Z" />
  </Svg>
);

Fill.iconType = 'Fill';
