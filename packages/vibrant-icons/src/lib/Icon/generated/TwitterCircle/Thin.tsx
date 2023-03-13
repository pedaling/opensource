import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'twittercircle',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.05 10v.3c0 3.1-2.35 6.7-6.7 6.7-1.35 0-2.55-.4-3.6-1.05.2 0 .35.05.55.05 1.1 0 2.1-.4 2.95-1-1.05 0-1.9-.7-2.2-1.65.15.05.3.05.45.05.2 0 .4-.05.6-.1-1.1-.2-1.9-1.15-1.9-2.3v-.05c.3.2.7.3 1.05.3-.65-.4-1.05-1.15-1.05-1.95 0-.45.1-.85.3-1.2 1.15 1.45 2.9 2.35 4.85 2.45-.05-.15-.05-.35-.05-.55 0-1.3 1.05-2.35 2.35-2.35.7 0 1.3.3 1.7.75.55-.1 1.05-.3 1.5-.55-.2.55-.55 1-1.05 1.3.5-.05.95-.2 1.35-.35-.2.45-.6.85-1.1 1.2Z" />
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
  </Svg>
);

Thin.iconType = 'Thin';
