import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'helpcircle-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1Zm0 17c-.85 0-1.5-.65-1.5-1.5S11.15 15 12 15s1.5.65 1.5 1.5S12.85 18 12 18Zm3.4-8.05c-.1.25-.25.5-.45.75-.2.2-.45.5-.8.8l-.3.25c-.3.25-.45.5-.6.75-.1.25-.15.5-.15.9 0 .05-.05.1-.1.1h-2c-.05 0-.1-.05-.1-.1 0-.6.05-1.15.2-1.6.15-.45.4-.85.75-1.1.35-.3.65-.55.8-.8.15-.25.25-.5.25-.75 0-.35-.05-.6-.2-.75-.15-.15-.35-.25-.65-.25-.25 0-.45.1-.65.3-.15.2-.25.45-.25.8 0 .05-.05.1-.1.1H8.6c-.05 0-.1-.05-.1-.1.05-1.1.35-1.9 1-2.4.65-.55 1.5-.8 2.55-.8 1.1 0 1.95.25 2.55.75.6.5.9 1.25.9 2.25.1.3.05.65-.1.9Z" />
  </Svg>
);

Fill.iconType = 'Fill';
