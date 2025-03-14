import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'quotereverse-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.1 14.2c.75 0 1.45-.2 2.05-.5-.65 2.15-2.4 3.55-4.9 4.7-.05.05-.15.05-.2.1l.7 1.6c.1-.05.15-.05.25-.1 3.15-1.45 5.85-4.1 6.8-7.55.75-2.85-.25-5.6-2.3-6.8-.1-.05-.2-.1-.25-.15h-.05c-.6-.3-1.3-.5-2.05-.5-2.55 0-4.6 2.05-4.6 4.6-.05 2.5 2 4.6 4.55 4.6m0-7.45c1.55 0 2.85 1.25 2.85 2.85 0 1.55-1.25 2.85-2.85 2.85-1.55 0-2.85-1.25-2.85-2.85 0-1.55 1.25-2.85 2.85-2.85M6.6 14.2c.75 0 1.45-.2 2.05-.5-.65 2.15-2.4 3.55-4.9 4.7-.05.05-.15.05-.2.1l.7 1.6c.05-.05.1-.1.2-.1 3.15-1.45 5.85-4.1 6.8-7.55.75-2.85-.25-5.6-2.3-6.8-.1-.05-.2-.1-.25-.15h-.05c-.6-.3-1.3-.5-2.05-.5C4.05 5 2 7.05 2 9.6c0 2.5 2.05 4.6 4.6 4.6m0-7.45C8.15 6.75 9.45 8 9.45 9.6c0 1.55-1.25 2.85-2.85 2.85-1.55 0-2.85-1.25-2.85-2.85C3.75 8.05 5 6.75 6.6 6.75" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'QuoteReverseThin';
