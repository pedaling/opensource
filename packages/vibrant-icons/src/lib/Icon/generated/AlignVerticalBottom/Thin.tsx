import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alignverticalbottom-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M1.15039 21.8499v-1.2H22.8504v1.2H1.15039Zm13.10001-3.5c-.469 0-.85-.381-.85-.85v-8.5c0-.469.381-.85.85-.85h4c.469 0 .85.381.85.85v8.5c0 .469-.381.85-.85.85h-4Zm.85-1.7h2.3v-6.8h-2.3v6.8Zm-9.35001 1.7c-.469 0-.85-.381-.85-.85v-14c0-.469.381-.85.85-.85h4c.46901 0 .85001.381.85001.85v14c0 .469-.381.85-.85001.85h-4Zm.85-1.7h2.3v-12.3h-2.3v12.3Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlignVerticalBottomThin';
