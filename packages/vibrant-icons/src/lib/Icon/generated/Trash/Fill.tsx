import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'trash-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.75 3h-7.5V1.25c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25V3h-7.5C3.1 3 3 3.1 3 3.25v2c0 .15.1.25.25.25h17.5c.15 0 .25-.1.25-.25v-2c0-.15-.1-.25-.25-.25m0 4H15.5c-.15 0-.25.1-.25.25v10c0 .15-.1.25-.25.25h-1.5c-.15 0-.25-.1-.25-.25v-10c0-.15-.1-.25-.25-.25h-2c-.15 0-.25.1-.25.25v10c0 .15-.1.25-.25.25H9c-.15 0-.25-.1-.25-.25v-10c0-.15-.1-.25-.25-.25H3.25C3.1 7 3 7.15 3 7.25l1.15 14.5c0 .15.1.25.25.25h15.2c.15 0 .25-.1.25-.25L21 7.25c0-.1-.1-.25-.25-.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'TrashFill';
