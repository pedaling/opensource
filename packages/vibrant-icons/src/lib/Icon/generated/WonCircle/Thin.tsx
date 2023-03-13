import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'woncircle',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M17.75 11.5h-1.2l.85-2.95c.05-.15-.05-.3-.25-.3h-1c-.1 0-.2.05-.25.2l-.85 3.05h-1.4l-.9-3.05c-.05-.1-.15-.2-.25-.2h-1.1c-.1 0-.2.05-.25.2l-.85 3.05H8.9L8 8.45c-.05-.1-.15-.2-.25-.2h-1c-.15 0-.3.15-.25.3l.85 2.95h-1.2c-.15 0-.25.1-.25.25v1c0 .15.1.25.25.25h1.6l.95 3.3c.05.1.15.2.25.2h1.1c.1 0 .2-.05.25-.2l.95-3.3h1.25l.95 3.3c.05.1.15.2.25.2h1.1c.1 0 .2-.05.25-.2L16 13h1.6c.15 0 .25-.1.25-.25v-1c.15-.15.05-.25-.1-.25ZM9.6 13.9l-.25-.9h.5l-.25.9Zm2.2-2.4.2-.65.2.65h-.4Zm2.6 2.4-.3-.9h.5l-.2.9Z" />
  </Svg>
);

Thin.iconType = 'Thin';
