import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'photo-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2 21.35v.4c0 .15.1.25.25.25h19.5c.15 0 .25-.1.25-.25v-2.4l-7.2-7.25L2 21.35Z" />
    <Svg.Path d="M21.75 2H2.25C2.1 2 2 2.1 2 2.25V18.6l12.85-9.25c.1-.05.25-.05.3.05L22 16.2V2.25c0-.15-.1-.25-.25-.25ZM10.1 9.7c-.2.5-.7.9-1.25 1.05-.1 0-.25.05-.35.05-.1 0-.25 0-.35-.05-.55-.1-1.05-.5-1.25-1.05-.1-.2-.15-.45-.15-.7 0-.25.05-.45.15-.7.2-.5.7-.9 1.25-1.05.1 0 .25-.05.35-.05.1 0 .25 0 .35.05.55.1 1.05.5 1.25 1.05.1.2.15.45.15.7 0 .25-.05.45-.15.7Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PhotoFill';
