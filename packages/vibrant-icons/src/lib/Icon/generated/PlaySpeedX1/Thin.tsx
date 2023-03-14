import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playspeedx1-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m15.65 2.95-.9-.9c-.05-.05-.25-.05-.3.05L12 4.5 9.55 2.05C9.5 2 9.3 2 9.2 2.1l-.9.9c-.1.1-.1.25 0 .35l2.45 2.45L8.3 8.25c-.1.1-.1.25 0 .35l.9.9c.1.1.25.1.35 0L12 7l2.45 2.45c.1.1.25.1.35 0l.9-.9c.1-.1.1-.25 0-.35l-2.45-2.45L15.7 3.3c.05-.05.05-.25-.05-.35ZM6.1 15.2l-1.85 1.3c-.05.05-.15 0-.15-.1v-1.6c0-.05 0-.05.05-.1l1.9-1.4c.05-.05.1-.05.1-.05h1.8c.05 0 .1.05.1.1v8.25c0 .05-.05.1-.1.1H6.2c-.05 0-.1-.05-.1-.1v-6.4Zm3.9 5.55c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.65 0-1.1-.45-1.1-1.1Zm3.2-3.2c0-2.7 1.25-4.4 3.35-4.4s3.35 1.7 3.35 4.35c0 2.7-1.25 4.4-3.35 4.4s-3.35-1.7-3.35-4.35Zm4.7 0c0-1.75-.45-2.7-1.35-2.7-.85 0-1.35.95-1.35 2.7 0 1.7.5 2.7 1.35 2.7.85-.05 1.35-1 1.35-2.7Z" />
  </Svg>
);

Thin.iconType = 'Thin';
