import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'flag-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.5 8L21.95 2.35C22 2.3 22 2.25 22 2.25C22 2.1 21.9 2 21.75 2H3.25C3.1 2 3 2.1 3 2.25V21.75C3 21.9 3.1 22 3.25 22H4.5C4.65 22 4.75 21.9 4.75 21.75V14H21.75C21.9 14 22 13.9 22 13.75C22 13.7 22 13.65 21.95 13.65L18.5 8ZM4.75 12.25V3.75H19.05L16.6 7.75C16.5 7.9 16.5 8.1 16.6 8.25L19.05 12.25H4.75Z" />
  </Svg>
);

Thin.iconType = 'Thin';
