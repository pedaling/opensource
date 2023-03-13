import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M14.75 8.25c.45.3.8.65 1 1.1.2.45.35.95.35 1.5s-.1 1.05-.35 1.5c-.2.45-.55.8-1 1.1-.45.25-1.05.4-1.7.4h-1.3v2.1c0 .15-.1.25-.25.25H9.6c-.15 0-.25-.1-.25-.25V8.1c0-.15.1-.25.25-.25h3.5c.65 0 1.2.15 1.65.4Zm-1.45 1.7c-.2-.2-.5-.3-.9-.3h-.7v2.45h.7c.25 0 .45-.05.65-.15.2-.1.35-.25.45-.4.1-.2.15-.4.15-.65 0-.45-.1-.75-.35-.95Z" />
  </Svg>
);

Regular.iconType = 'Regular';
