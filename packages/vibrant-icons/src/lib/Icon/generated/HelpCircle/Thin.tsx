import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'helpcircle-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.75c5.1 0 9.25 4.15 9.25 9.25S17.1 21.25 12 21.25 2.75 17.1 2.75 12 6.9 2.75 12 2.75ZM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Z" />
    <Svg.Path d="M11.75 18.75a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM14.7 6.8c-.6-.55-1.45-.8-2.55-.8-1.05 0-1.9.25-2.55.8-.65.5-.95 1.2-1 2.4 0 .05.05.1.1.1h1.4c.05 0 .1-.05.1-.1 0-.55.1-1.1.5-1.45.4-.35.95-.5 1.45-.5.6 0 1.05.15 1.4.45.3.3.45.75.45 1.3 0 .8-.55 1.45-1.1 2-.6.6-1.25 1.1-1.6 1.85-.15.4-.25.8-.25 1.25v.75c0 .05.05.1.1.1h1.4c.05 0 .1-.05.1-.1-.05-1 0-1.65.6-2.25.45-.45 1-.85 1.4-1.35.55-.65.95-1.4.95-2.25 0-.9-.3-1.65-.9-2.2Z" />
  </Svg>
);

Thin.iconType = 'Thin';
