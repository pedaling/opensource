import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'phone-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6 3.85 9.4 7.3l-2.7 2.75 7.25 7.25 2.75-2.7 3.45 3.4-.8.8c-1.3 1.3-2.7 1.95-4.2 1.95-2.35 0-4.1-.55-7.2-3.65-2.7-2.65-4.2-5.1-4.6-7.2C3 8 3.6 6.3 5.2 4.7l.8-.85Zm.05-2.35c-.05 0-.15 0-.2.05l-1.9 1.9C-.05 7.5.85 12.5 6.7 18.3c3.45 3.45 5.6 4.2 8.45 4.2 1.95 0 3.75-.8 5.4-2.45l1.9-1.9c.1-.1.1-.25 0-.35l-5.6-5.55c-.05-.05-.1-.05-.2-.05-.05 0-.15 0-.2.05L13.9 14.8l-4.75-4.75L11.7 7.5c.1-.1.1-.25 0-.35l-5.5-5.6c-.05-.05-.1-.05-.15-.05Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PhoneThin';
