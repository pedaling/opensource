import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="m22 12 1.9-1.9c.1-.1.1-.25 0-.35L22.5 8.3c-.1-.1-.25-.1-.35 0l-1.9 1.9-1.9-1.9c-.1-.1-.25-.1-.35 0l-1.4 1.4c-.1.1-.1.25 0 .35L18.5 12l-1.9 1.9c-.1.1-.1.25 0 .35l1.4 1.4c.1.1.25.1.35 0l1.9-1.9 1.9 1.9c.1.1.25.1.35 0l1.4-1.4c.1-.1.1-.25 0-.35L22 12ZM12 6.2v11.65L9.1 15.7a.96.96 0 0 0-.6-.2h-5v-7h5c.2 0 .4-.05.6-.2L12 6.2Zm2.25-4.7c-.05 0-.1 0-.15.05L8.15 5.9c-.1.05-.2.1-.3.1h-6.6C1.1 6 1 6.1 1 6.25v11.5c0 .15.1.25.25.25h6.6c.1 0 .2.05.3.1l6 4.35c.05.05.1.05.15.05.15 0 .25-.1.25-.25V1.75c-.05-.15-.15-.25-.3-.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
