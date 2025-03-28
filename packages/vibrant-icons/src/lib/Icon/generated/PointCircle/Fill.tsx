import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pointcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.4 9.65h-.7v2.45h.7c.25 0 .45-.05.65-.15s.35-.25.45-.4c.1-.2.15-.4.15-.65 0-.4-.1-.7-.35-.9-.2-.25-.5-.35-.9-.35" />
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1m3.75 11.35c-.2.45-.55.8-1 1.1-.45.25-1.05.4-1.7.4h-1.3v2.1c0 .15-.1.25-.25.25H9.6c-.15 0-.25-.1-.25-.25V8.1c0-.15.1-.25.25-.25h3.5c.7 0 1.25.15 1.7.4.45.3.8.65 1 1.1s.35.95.35 1.5c-.05.55-.15 1.05-.4 1.5" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'PointCircleFill';
