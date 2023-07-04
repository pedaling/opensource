import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'alignverticaltop-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.75039 21.3499c-.469 0-.85-.381-.85-.85v-14c0-.469.381-.85.85-.85h4c.46901 0 .85001.381.85001.85v14c0 .469-.381.85-.85001.85h-4Zm.85-1.7h2.3v-12.3h-2.3v12.3Zm7.65001-3.8c-.469 0-.85-.381-.85-.85v-8.5c0-.469.381-.85.85-.85h4c.469 0 .85.381.85.85v8.5c0 .469-.381.85-.85.85h-4Zm.85-1.7h2.3v-6.8h-2.3v6.8Zm-13.95001-10.8v-1.2H22.8504v1.2H1.15039Z" />
  </Svg>
);

Thin.iconType = 'Thin';
