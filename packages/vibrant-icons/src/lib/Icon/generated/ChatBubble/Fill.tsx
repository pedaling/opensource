import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chatbubble-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21.4489 17.8279L21.4469 17.8294C22.4949 16.1349 23.0999 14.1384 23.0999 11.9999C23.0999 5.8694 18.1304 0.899902 11.9999 0.899902C5.8694 0.899902 0.899902 5.8694 0.899902 11.9999C0.899902 18.1304 5.8694 23.0999 11.9999 23.0999C14.1359 23.0999 16.1304 22.4959 17.8234 21.4504H21.4499L21.4489 17.8279Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChatBubbleFill';
