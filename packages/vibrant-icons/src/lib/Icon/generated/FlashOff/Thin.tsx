import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M10.445 10.62h5l-4.66 7.115V13.63a.25.25 0 0 0-.25-.25h-5l4.66-7.115v4.105a.25.25 0 0 0 .25.25ZM11.69.985a.24.24 0 0 0-.205.115l-8.93 13.645a.25.25 0 0 0 .21.385h6.29v7.635a.25.25 0 0 0 .255.25.24.24 0 0 0 .205-.115L18.45 9.255a.25.25 0 0 0-.21-.385h-6.295V1.235a.25.25 0 0 0-.255-.25Zm9.735 16.475-.88-.885a.25.25 0 0 0-.355 0l-1.94 1.94-1.94-1.94a.24.24 0 0 0-.35 0l-.885.88a.251.251 0 0 0 0 .355l1.94 1.94-1.94 1.94a.24.24 0 0 0 0 .35l.885.885a.24.24 0 0 0 .35 0l1.94-1.935 1.94 1.935a.251.251 0 0 0 .355 0l.88-.88a.251.251 0 0 0 0-.355l-1.935-1.94 1.935-1.94a.24.24 0 0 0 0-.35Z" />
  </Svg>
);

Thin.iconType = 'Thin';
