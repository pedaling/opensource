import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M14.5 2.5h-2c-.15 0-.25.1-.25.25v8h-8v-8c0-.15-.1-.25-.25-.25H2c-.15 0-.25.1-.25.25v18.5c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25v-8h8v8c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V2.75c0-.15-.1-.25-.25-.25Zm5.65 12-1.95 1.4c-.05.05-.15 0-.15-.1v-1.7c0-.05 0-.05.05-.1l2-1.5c.05-.05.1-.05.1-.05h1.95c.05 0 .1.05.1.1v8.8c0 .05-.05.1-.1.1h-1.9c-.05 0-.1-.05-.1-.1V14.5Z" />
  </Svg>
);

Fill.iconType = 'Fill';
