import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alertcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.05 21.25c-5.15 0-9.3-4.15-9.3-9.25s4.15-9.25 9.3-9.25A9.23 9.23 0 0 1 21.3 12c0 5.1-4.15 9.25-9.25 9.25m0 1.75c6.1 0 11.05-4.9 11.05-11S18.15 1 12.05 1 1 5.9 1 12s4.95 11 11.05 11" />
    <Svg.Path d="M12.9 6.75V14c0 .15-.1.25-.25.25H11.4c-.15 0-.25-.1-.25-.25V6.75c0-.15.1-.25.25-.25h1.25c.15 0 .25.1.25.25M12.05 18c.635 0 1.15-.492 1.15-1.1 0-.607-.515-1.1-1.15-1.1s-1.15.492-1.15 1.1.515 1.1 1.15 1.1" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlertCircleThin';
