import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'arrowdown-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m19.95 13.8-.9-.9c-.1-.1-.25-.1-.35 0l-5.8 5.85V2.25c0-.15-.1-.25-.25-.25H11.4c-.15 0-.25.1-.25.25v16.5l-5.85-5.8c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l7.75 7.75c.1.1.25.1.35 0l7.75-7.75c.15-.1.15-.3.05-.4Z" />
  </Svg>
);

Thin.iconType = 'Thin';
