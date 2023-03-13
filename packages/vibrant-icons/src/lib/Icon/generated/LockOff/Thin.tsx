import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'lockoff',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.9 17.55c0 .1-.1.2-.2.2h-1.4c-.1 0-.2-.1-.2-.2v-3.6c0-.1.1-.2.2-.2h1.4c.1 0 .2.1.2.2v3.6Z" />
    <Svg.Path d="M8.1 9V6.75c0-2.05 1.5-3.8 3.5-4 2-.2 3.75 1.2 4.15 3.05.05.1.1.2.25.2h1.25c.15 0 .3-.15.25-.3-.4-2.75-2.9-4.85-5.85-4.7-3 .2-5.25 2.8-5.25 5.8V9H3.25C3.1 9 3 9.1 3 9.25v13c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-13c0-.15-.1-.25-.25-.25H8.1Zm11.15 11.75H4.75v-10h14.5v10Z" />
  </Svg>
);

Thin.iconType = 'Thin';
