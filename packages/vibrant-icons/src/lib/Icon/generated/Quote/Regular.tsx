import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'quote-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.85 9.95C6.2 8.5 8.4 7 10.05 6.25c.1-.05.15-.2.1-.3l-.75-1.8c-.05-.15-.2-.2-.35-.15-3.15 1.45-5.85 4.1-6.8 7.55-1 3.85 1.1 7.45 4.8 7.45 2.3 0 4.45-2.05 4.45-4.55 0-2.95-2.6-5.15-5.65-4.5ZM6.9 16.5c-1.15 0-2.1-.95-2.1-2.1 0-1.15.95-2.1 2.1-2.1 1.15 0 2.1.95 2.1 2.1 0 1.15-.9 2.1-2.1 2.1Zm9.45-6.55c.35-1.45 2.55-2.95 4.2-3.7.1-.05.15-.2.1-.3l-.75-1.8c-.05-.15-.2-.2-.35-.15-3.15 1.45-5.85 4.1-6.8 7.55-1 3.85 1.1 7.45 4.8 7.45 2.3 0 4.45-2.05 4.45-4.55 0-2.95-2.6-5.15-5.65-4.5Zm1.05 6.55c-1.15 0-2.1-.95-2.1-2.1 0-1.15.95-2.1 2.1-2.1 1.15 0 2.1.95 2.1 2.1 0 1.15-.9 2.1-2.1 2.1Z" />
  </Svg>
);

Regular.iconType = 'Regular';
