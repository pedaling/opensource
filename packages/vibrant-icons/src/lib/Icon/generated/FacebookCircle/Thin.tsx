import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 17.75h2.4V12h1.6l.2-2h-1.8V9c0-.5.05-.8.8-.8h1v-2h-1.6c-1.9 0-2.55.95-2.55 2.6V10h-1.2v2h1.15v5.75Z"
    />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
  </Svg>
);

Thin.iconType = 'Thin';
