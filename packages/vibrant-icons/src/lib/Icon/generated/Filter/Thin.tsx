import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'filter-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.75 15.4H19c-.4-1.45-1.7-2.5-3.25-2.5s-2.85 1.05-3.25 2.5H2.25c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25H12.5c.4 1.45 1.7 2.5 3.25 2.5s2.85-1.05 3.25-2.5h2.75c.15 0 .25-.1.25-.25v-1.25c0-.15-.1-.25-.25-.25Zm-6 2.5c-.9 0-1.6-.75-1.6-1.6 0-.85.75-1.6 1.6-1.6.85 0 1.6.75 1.6 1.6 0 .85-.7 1.6-1.6 1.6ZM2.25 8.6H5c.4 1.45 1.7 2.5 3.25 2.5s2.85-1.05 3.25-2.5h10.25c.15 0 .25-.1.25-.25V7.1c0-.15-.1-.25-.25-.25H11.5c-.4-1.45-1.7-2.5-3.25-2.5S5.4 5.4 5 6.85H2.25C2.1 6.85 2 7 2 7.1v1.25c0 .15.1.25.25.25Zm6-2.5c.9 0 1.6.75 1.6 1.6 0 .85-.75 1.6-1.6 1.6-.85 0-1.65-.75-1.65-1.6 0-.85.75-1.6 1.65-1.6Z" />
  </Svg>
);

Thin.iconType = 'Thin';
