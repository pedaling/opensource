import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'video-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.5999 21.6004C2.48945 21.6004 2.3999 21.5109 2.3999 21.4004V2.60039C2.3999 2.48993 2.48945 2.40039 2.5999 2.40039H21.3999C21.5104 2.40039 21.5999 2.48993 21.5999 2.60039V21.4004C21.5999 21.5109 21.5104 21.6004 21.3999 21.6004H2.5999ZM4.0999 19.9004H19.8999V4.10039H4.0999V19.9004ZM9.6499 8.44784C9.6499 8.36961 9.73568 8.32168 9.80231 8.36268L15.5755 11.9152C15.639 11.9543 15.639 12.0465 15.5755 12.0856L9.80231 15.6381C9.73568 15.6791 9.6499 15.6312 9.6499 15.5529V8.44784Z" />
  </Svg>
);

Thin.iconType = 'Thin';
