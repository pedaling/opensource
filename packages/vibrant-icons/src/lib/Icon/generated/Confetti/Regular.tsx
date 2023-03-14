import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'confetti-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.5 13c-.85 0-1.5.65-1.5 1.5s.65 1.5 1.5 1.5 1.5-.65 1.5-1.5-.65-1.5-1.5-1.5ZM18.75 2c-.7 0-1.25.55-1.25 1.25s.55 1.25 1.25 1.25S20 3.95 20 3.25 19.45 2 18.75 2Zm-11.1 9.8 4.6 4.6-7.2 2.6 2.6-7.2Zm-.9-4.35c-.1 0-.2.05-.25.15L1.05 22.65c-.1.2.05.35.25.35h.1l15-5.5c.15-.05.2-.3.1-.4L6.9 7.55c-.05-.05-.1-.1-.15-.1Zm16.15.45-1.5-1.3c-.1-.1-.25-.1-.35 0L19.2 8.75 16.95 6.8c-.1-.1-.25-.1-.35 0l-3.35 3.85c-.1.1-.1.25 0 .35l1.5 1.3c.1.1.25.1.35 0l1.85-2.15 2.25 1.95c.1.1.25.1.35 0l3.35-3.85c.15-.1.1-.3 0-.35ZM14.5 1h-2c-.15 0-.25.1-.25.25V3.1h-2.5c-.15 0-.25.1-.25.25v4.3c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V5.6h2.5c.15 0 .25-.1.25-.25v-4.1c0-.15-.1-.25-.25-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
