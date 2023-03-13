import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M21 14.05v-6.9c0-.65-.45-1.25-1.1-1.3-.75-.1-1.4.5-1.4 1.25v3.35c0 .4-.35.75-.75.75s-.75-.35-.75-.75V3.6c0-.65-.45-1.25-1.1-1.3-.75-.1-1.4.5-1.4 1.25v6.9c0 .4-.35.75-.75.75s-.75-.35-.75-.75V2.3c0-.65-.45-1.25-1.1-1.3-.75-.05-1.4.5-1.4 1.25v8.2c0 .4-.35.75-.75.75S9 10.85 9 10.45V3.6c0-.65-.45-1.25-1.1-1.3-.75-.05-1.4.5-1.4 1.25V14.1c0 .3-.2.5-.5.5-.25 0-.4-.15-.5-.35l-.9-3.45c-.15-.6-.7-1-1.3-.95-.8.05-1.35.85-1.15 1.55l1.3 4.9c1 3.85 4.5 6.7 8.65 6.7 4.9 0 8.9-4 8.9-8.95Z" />
  </Svg>
);

Fill.iconType = 'Fill';
