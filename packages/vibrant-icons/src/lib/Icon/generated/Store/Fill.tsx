import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.35 10C20.8 10 22 8.85 22 7.5V2.25c0-.15-.1-.25-.25-.25h-4.8c-.15 0-.3.15-.3.3v5.2c0 1.35 1.2 2.5 2.7 2.5Z" />
    <Svg.Path d="M19.35 10c-1.45 0-2.65-1.2-2.65-2.65V2h5.1c.1 0 .2.1.2.25v5.1C22 8.8 20.8 10 19.35 10ZM12 10c-1.45 0-2.65-1.2-2.65-2.65V2h5.35v5.35C14.65 8.8 13.45 10 12 10Zm-7.35 0C3.2 10 2 8.8 2 7.35v-5.1c0-.15.1-.25.25-.25h5.1v5.35c0 1.45-1.2 2.65-2.7 2.65ZM22 11.15c-.75.55-1.7.85-2.65.85-1.5 0-2.8-.7-3.65-1.8-.9 1.1-2.2 1.8-3.7 1.8s-2.8-.7-3.65-1.8c-.85 1.1-2.2 1.8-3.7 1.8-1 0-1.9-.3-2.65-.85v10.6c0 .15.1.25.25.25h8.5v-6.75c0-.15.1-.25.25-.25h2c.15 0 .25.1.25.25V22h8.5c.15 0 .25-.1.25-.25v-10.6Z" />
  </Svg>
);

Fill.iconType = 'Fill';
