import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M21.75 6.5H11.8C11.3 5.05 9.9 4 8.25 4s-3 1.05-3.55 2.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25H4.7c.5 1.45 1.9 2.5 3.55 2.5s3-1.05 3.55-2.5h9.95c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25ZM8.25 9C7.55 9 7 8.45 7 7.75S7.55 6.5 8.25 6.5s1.25.55 1.25 1.25S8.95 9 8.25 9Zm-6 8.5h9.95c.5 1.45 1.9 2.5 3.55 2.5s3-1.05 3.55-2.5h2.45c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25H19.3c-.5-1.45-1.9-2.5-3.55-2.5s-3 1.05-3.55 2.5H2.25c-.15 0-.25.1-.25.25v2c0 .15.1.25.25.25Zm13.5-2.5c.7 0 1.25.55 1.25 1.25s-.55 1.25-1.25 1.25-1.25-.55-1.25-1.25.55-1.25 1.25-1.25Z" />
  </Svg>
);

Regular.iconType = 'Regular';
