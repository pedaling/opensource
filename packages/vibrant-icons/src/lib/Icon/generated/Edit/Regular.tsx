import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'edit-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.75 4.25a4.16 4.16 0 0 0-3-1.25c-1.1 0-2.15.4-3 1.25l-10.3 10.3c-.1.1-.15.2-.15.3l-.8 5.5c-.1.6.4 1.15 1 1.15h.15l5.5-.8c.1 0 .2-.05.3-.15l10.3-10.3a4.255 4.255 0 0 0 0-6ZM8.15 18.3l-2 .3-.75-.75.3-2 7.75-7.75 2.45 2.45-7.75 7.75ZM18 8.5l-.7.7-2.45-2.45.65-.75c.35-.35.75-.5 1.25-.5.45 0 .9.2 1.25.5.65.7.65 1.8 0 2.5Z" />
  </Svg>
);

Regular.iconType = 'Regular';
