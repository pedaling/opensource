import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'replay',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.75 12h2c.15 0 .25.1.25.25.15 4.45 3.9 8 8.45 7.75 4.05-.25 7.35-3.55 7.55-7.6.2-4.6-3.45-8.4-8-8.4-1.2 0-2.35.3-3.4.75l.9 1.45c.1.15 0 .35-.2.35L3.8 6.5c-.15 0-.3-.15-.2-.35l2.3-5c.05-.15.3-.15.4 0l.95 1.5c1.5-.75 3.2-1.2 5.05-1.15 5.4.15 9.9 4.55 10.2 10 .3 6.05-4.5 11-10.5 11-5.7 0-10.35-4.55-10.5-10.25 0-.15.1-.25.25-.25Z" />
    <Svg.Path d="M16.15 11.8c.15.1.15.3 0 .4l-2.9 1.9-2.8 1.85c-.15.1-.4 0-.4-.2v-7.5c0-.2.25-.3.4-.2l2.8 1.85 2.9 1.9Z" />
  </Svg>
);

Regular.iconType = 'Regular';
