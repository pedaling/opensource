import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paper1-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.5 2.25c0-.15-.1-.25-.25-.25H3.75c-.15 0-.25.1-.25.25v19.5c0 .15.1.25.25.25H13.8c.15 0 .25-.05.35-.15l6.2-6.2c.1-.1.15-.2.15-.35zm-7 13v5H5.25V3.75h13.5V15h-5c-.15 0-.25.1-.25.25" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'Paper1Thin';
