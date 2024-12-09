import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'gift-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.25 5 2.7-2.7c.1-.1.1-.25 0-.35l-.9-.9c-.1-.1-.25-.1-.35 0L12 3.75l-2.7-2.7c-.1-.1-.25-.1-.35 0l-.9.9c-.1.1-.1.25 0 .35l2.7 2.7H2v17h20V5zM11.1 20.25H3.75V14.2h7.4v6.05zm0-7.8H3.75v-5.7h7.4v5.7zm9.15 7.8H12.9V14.2h7.4v6.05zm0-7.8H12.9v-5.7h7.4v5.7z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'GiftThin';
