import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hashtag-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.84423 6.90002L10.5 2.25H8.25L7.59423 6.90002H3.25L3.125 9.10002H7.28397L6.46602 14.9H2.375L2.25 17.1H6.15577L5.5 21.75H7.75L8.40577 17.1H14.1558L13.5 21.75H15.75L16.4058 17.1H20.75L20.875 14.9H16.716L17.534 9.10002H21.625L21.75 6.90002H17.8442L18.5 2.25H16.25L15.5942 6.90002H9.84423ZM14.466 14.9L15.284 9.10002H9.53397L8.71602 14.9H14.466Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HashtagFill';
