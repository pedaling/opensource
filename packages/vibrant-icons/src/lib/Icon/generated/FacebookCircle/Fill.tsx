import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm2.45 11h-1.6v5.75H10.5V12H9.3v-2h1.2V8.8c0-1.6.65-2.6 2.55-2.6h1.6v2h-1c-.75 0-.8.3-.8.8v1h1.8l-.2 2Z" />
  </Svg>
);

Fill.iconType = 'Fill';
