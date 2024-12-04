import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'dislike-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22 13.5V9c0-3.85-3.15-7-7-7H2.25C2.1 2 2 2.1 2 2.25V3.5c0 .15.1.25.25.25h3.6v8.2c-1-.15-1.95-.2-2.9-.2h-.7c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25H3c2 0 4.05.1 5.75 1.45 1.6 1.3 2.5 3.25 2.85 5.25.15.85.55 1.65 1.25 2.15.6.45 1.25.65 1.9.65 1 0 1.95-.45 2.55-1.25.6-.8.65-1.75.6-2.7-.05-1.05-.3-2.1-.45-3.05h2.05c1.4 0 2.5-1.1 2.5-2.5Zm-1.75 0c0 .25-.15.45-.2.55-.1.1-.25.2-.55.2h-3.9c-.15 0-.25.15-.25.3l.3 1.75c.05.25.1.45.1.7.15.75.25 1.5.3 2.2.05.75 0 1.2-.25 1.5-.25.35-.7.6-1.15.6h-.05c-.25 0-.5-.1-.7-.2-.35-.2-.65-.65-.7-1.15-.45-2.6-1.7-4.85-3.5-6.3-.7-.55-1.45-.95-2.2-1.2v-8.7h7.35c2.9 0 5.25 2.35 5.25 5.25l.15 4.5Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DislikeThin';
