import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playnext-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M18.75 3h-2c-.15 0-.25.1-.25.25v7.6L5.3 3.05C5.25 3 5.25 3 5.2 3c-.1 0-.2.1-.2.2v17.6c0 .1.1.2.2.2.05 0 .05 0 .1-.05l11.2-7.8v7.6c0 .15.1.25.25.25h2c.15 0 .25-.1.25-.25V3.25c0-.15-.1-.25-.25-.25ZM7.5 16.4V7.6l6.3 4.4-6.3 4.4Z" />
  </Svg>
);

Regular.iconType = 'Regular';
