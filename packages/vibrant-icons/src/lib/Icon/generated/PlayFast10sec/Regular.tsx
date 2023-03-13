import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M22.25 12h-2c-.15 0-.25.1-.25.25-.15 4.45-3.9 8-8.45 7.75C7.5 19.75 4.2 16.45 4 12.4 3.8 7.8 7.45 4 12 4c1.2 0 2.35.3 3.4.75l-.9 1.45c-.1.15 0 .35.2.35l5.5-.05c.15 0 .3-.15.2-.35l-2.3-5c-.05-.15-.3-.15-.4 0l-.95 1.5c-1.5-.75-3.2-1.2-5.05-1.15-5.4.15-9.9 4.55-10.2 10-.3 6.05 4.5 11 10.5 11 5.7 0 10.35-4.55 10.5-10.25 0-.15-.1-.25-.25-.25Z" />
    <Svg.Path d="m8.15 10.6-1.5 1c-.05.05-.15 0-.15-.1v-1.4c0-.05 0-.05.05-.1l1.6-1.05c.05 0 .05-.05.1-.05H10c.05 0 .1.05.1.1v6.5c0 .05-.05.1-.1.1H8.25c-.05 0-.1-.05-.1-.1v-4.9Zm3.15 1.65c0-2.15 1.15-3.45 3-3.45s3 1.35 3 3.45c0 2.15-1.15 3.45-3 3.45s-3-1.3-3-3.45Zm4 0c0-1.25-.35-1.95-1-1.95s-1 .7-1 1.95.35 1.95 1 1.95 1-.7 1-1.95Z" />
  </Svg>
);

Regular.iconType = 'Regular';
