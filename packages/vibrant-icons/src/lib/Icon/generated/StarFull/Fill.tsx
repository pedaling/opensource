import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'starfull-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1c-.1 0-.2.05-.25.15L8.6 7.55c-.05.15-.2.25-.4.25l-7 1.05c-.2.05-.3.3-.15.45l5.1 5c.1.1.15.3.15.45l-1.2 7c-.05.15.1.3.25.3.05 0 .1 0 .1-.05l6.3-3.3q.225-.15.45 0l6.3 3.25c.05 0 .1.05.1.05.15 0 .3-.15.25-.3l-1.2-7c-.05-.15.05-.35.15-.45l5.1-5c.15-.15.05-.4-.15-.45L15.7 7.75c-.15 0-.3-.15-.4-.25l-3.05-6.35A.28.28 0 0 0 12 1" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'StarFullFill';
