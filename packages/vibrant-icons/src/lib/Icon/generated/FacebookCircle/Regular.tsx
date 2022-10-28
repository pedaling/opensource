import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path d="M12 3.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5S7.3 3.5 12 3.5ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 17.75h2.4V12h1.6l.2-2h-1.8V9c0-.5.05-.8.8-.8h1v-2h-1.6c-1.9 0-2.55.95-2.55 2.6V10h-1.2v2h1.15v5.75Z"
    />
  </Svg>
);

Regular.iconType = 'Regular';
