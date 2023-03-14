import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'texth2-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.75 2.5H12.5c-.15 0-.25.1-.25.25v8.4h-9.5v-8.4c0-.15-.1-.25-.25-.25H1.25c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25H2.5c.15 0 .25-.1.25-.25V12.9h9.5v8.4c0 .15.1.25.25.25h1.25c.15 0 .25-.1.25-.25V2.8c0-.2-.1-.3-.25-.3Zm3.15 17.75c0-.05 0-.05.05-.05l2.95-2.9c1.1-1.05 1.3-1.5 1.3-2.1 0-.7-.55-1.25-1.3-1.25-.85 0-1.4.55-1.45 1.3 0 .05-.05.1-.1.1H16.9c-.05 0-.1-.05-.1-.1.05-1.6 1.35-2.75 3.1-2.75 1.8 0 3 1.05 3 2.55 0 1.05-.5 1.75-1.95 3.2l-1.75 1.7V20h3.7c.05 0 .1.05.1.1v1.25c0 .05-.05.1-.1.1H17c-.05 0-.1-.05-.1-.1v-1.1Z" />
  </Svg>
);

Thin.iconType = 'Thin';
