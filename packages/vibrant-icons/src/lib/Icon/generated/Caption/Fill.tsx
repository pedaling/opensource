import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'caption-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.7924 21.6004V15.4344H15.1544V13.6499H22.5954V15.4344H19.9579V21.6004H17.7924ZM8.2749 21.3504C8.13683 21.3504 8.0249 21.2385 8.0249 21.1004V19.1999C8.0249 19.0618 8.13683 18.9499 8.2749 18.9499H9.6749V5.05089H4.5499V6.60139C4.5499 6.73946 4.43797 6.85139 4.2999 6.85139H2.3999C2.26183 6.85139 2.1499 6.73946 2.1499 6.60139V2.90039C2.1499 2.76232 2.26183 2.65039 2.3999 2.65039H19.3499C19.488 2.65039 19.5999 2.76232 19.5999 2.90039V6.60139C19.5999 6.73946 19.488 6.85139 19.3499 6.85139H17.4499C17.3118 6.85139 17.1999 6.73946 17.1999 6.60139V5.05089H12.0749V18.9499H13.4749C13.613 18.9499 13.7249 19.0618 13.7249 19.1999V21.1004C13.7249 21.2385 13.613 21.3504 13.4749 21.3504H8.2749Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CaptionFill';
