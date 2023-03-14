import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'texth2-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.75 2.5h-2c-.15 0-.25.1-.25.25v8h-8v-8c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8h8v8c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25Zm3.05 17.55c0-.05 0-.1.05-.15l2.8-2.7c1-1 1.2-1.4 1.2-1.95 0-.6-.45-1.05-1.1-1.05-.7 0-1.15.45-1.25 1.15 0 .05-.05.1-.1.1h-1.7c-.05 0-.1-.05-.1-.1.05-1.7 1.35-2.8 3.15-2.8 1.85 0 3.1 1.05 3.1 2.65 0 1.15-.5 1.8-1.85 3.1l-1.6 1.45v.05h3.45c.05 0 .1.05.1.1v1.55c0 .05-.05.1-.1.1h-6c-.05 0-.1-.05-.1-.1v-1.4h.05Z" />
  </Svg>
);

Fill.iconType = 'Fill';
