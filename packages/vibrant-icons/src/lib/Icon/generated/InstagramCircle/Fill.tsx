import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'instagramcircle-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 9.3c-1.45 0-2.7 1.2-2.7 2.7 0 1.45 1.2 2.7 2.7 2.7 1.5 0 2.75-1.2 2.75-2.7-.05-1.55-1.3-2.7-2.75-2.7Zm0 4.4c-.95 0-1.75-.8-1.75-1.75s.8-1.75 1.75-1.75 1.75.8 1.75 1.75c-.05.95-.8 1.75-1.75 1.75Zm2.8-5.15c-.35 0-.65.3-.65.65 0 .35.3.65.65.65.35 0 .65-.3.65-.65 0-.4-.3-.65-.65-.65Z" />
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm5.25 13.15c0 .9-.3 1.7-.85 2.25s-1.35.85-2.2.85H9.9c-.85 0-1.65-.3-2.2-.85-.6-.55-.85-1.35-.85-2.25V9.8c0-1.8 1.25-3.1 3.1-3.1h4.35c.9 0 1.65.3 2.2.85.55.55.85 1.3.85 2.2v4.4h-.1Z" />
  </Svg>
);

Fill.iconType = 'Fill';
