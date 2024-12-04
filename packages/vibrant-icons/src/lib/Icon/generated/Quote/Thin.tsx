import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'quote-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.9 9.8c-.75 0-1.45.2-2.05.5.65-2.15 2.4-3.55 4.9-4.7.05-.05.15-.05.2-.1l-.7-1.6c-.05.05-.1.1-.2.1-3.15 1.45-5.85 4.1-6.8 7.55-.75 2.85.25 5.6 2.35 6.8.1.05.2.1.25.15h.05c.6.3 1.3.5 2.05.5 2.55 0 4.6-2.05 4.6-4.6-.05-2.5-2.1-4.6-4.65-4.6Zm0 7.45c-1.55 0-2.85-1.25-2.85-2.85 0-1.55 1.25-2.85 2.85-2.85 1.55 0 2.85 1.25 2.85 2.85 0 1.55-1.25 2.85-2.85 2.85ZM17.4 9.8c-.75 0-1.45.2-2.05.5.65-2.15 2.4-3.55 4.9-4.7.05-.05.15-.05.2-.1l-.7-1.6c-.05.05-.1.1-.2.1-3.15 1.45-5.85 4.1-6.8 7.55-.75 2.85.25 5.6 2.35 6.8.1.05.2.1.25.15h.05c.6.3 1.3.5 2.05.5 2.55 0 4.6-2.05 4.6-4.6-.05-2.5-2.1-4.6-4.65-4.6Zm0 7.45c-1.55 0-2.85-1.25-2.85-2.85 0-1.55 1.25-2.85 2.85-2.85 1.55 0 2.85 1.25 2.85 2.85 0 1.55-1.25 2.85-2.85 2.85Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'QuoteThin';
