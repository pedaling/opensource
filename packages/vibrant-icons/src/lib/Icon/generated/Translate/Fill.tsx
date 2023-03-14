import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'translate-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.265 9.895c0 .55.43.885 1.125.885a1.404 1.404 0 0 0 1.5-1.325v-.55l-1.5.09c-.715.05-1.125.37-1.125.9Z" />
    <Svg.Path d="M21.75 8.5H13.5V2.25a.25.25 0 0 0-.25-.25h-11a.25.25 0 0 0-.25.25v13a.25.25 0 0 0 .25.25h8.25v6.25a.25.25 0 0 0 .25.25h11a.25.25 0 0 0 .25-.25v-13a.25.25 0 0 0-.25-.25Zm-11 3.46H8.915v-1.04a2.45 2.45 0 0 1-2.14 1.15c-1.355 0-2.3-.85-2.3-2.06s.95-2 2.675-2.09l1.765-.11V7.5c0-.66-.445-1.05-1.19-1.05a1.175 1.175 0 0 0-1.28.82h-1.65v-.03c.11-1.335 1.26-2.17 3-2.17s2.925.9 2.925 2.29l.03 4.6ZM20 19.365h-.045a13.55 13.55 0 0 1-3.55-1.36 13.614 13.614 0 0 1-3.57 1.36h-.045l-.5-1.465h.055a15.684 15.684 0 0 0 2.745-.96 7.785 7.785 0 0 1-1.5-2.595l1.59-.445a5.295 5.295 0 0 0 1.185 2.08 6.194 6.194 0 0 0 1.175-2.255h-5.16v-1.47h3.12V11.15h1.78v1.105h3.13v1.47h-1.025a8.615 8.615 0 0 1-1.66 3.215c.884.403 1.803.724 2.745.96h.055L20 19.365Z" />
  </Svg>
);

Fill.iconType = 'Fill';
