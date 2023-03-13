import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.75 12.9h-4.5c-.15 0-.25-.1-.25-.25V11.4c0-.15.1-.25.25-.25h4.5c.15 0 .25.1.25.25v1.25c0 .1-.1.25-.25.25ZM21.6 6.1l-3.9 2.25c-.1.05-.25.05-.35-.1l-.6-1.1c-.05-.1-.05-.25.1-.35l3.9-2.25c.1-.05.25 0 .3.1l.6 1.1c.1.1.05.25-.05.35Zm-.9 13.35-3.9-2.25c-.1-.05-.15-.2-.1-.35l.6-1.1c.05-.1.2-.15.35-.1l3.9 2.25c.1.05.15.2.1.35l-.6 1.1c-.05.1-.2.15-.35.1ZM12.75 4.7v14.6l-3.9-2.85c-.15-.1-.4-.2-.6-.2h-5.5v-8.5h5.5c.2 0 .4-.05.6-.2l3.9-2.85Zm1.5-3.2c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
  </Svg>
);

Thin.iconType = 'Thin';
