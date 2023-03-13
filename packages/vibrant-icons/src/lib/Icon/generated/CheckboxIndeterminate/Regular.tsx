import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'checkboxindeterminate',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.38 4.85c-.2-.9-.45-1.45-1.101-2.1-.651-.65-1.202-.9-2.103-1.1-.551-.1-1.402-.15-2.304-.15H7.11c-.852 0-1.753.05-2.254.15-.851.2-1.402.45-2.103 1.1C2.1 3.45 1.85 4 1.65 4.85c-.1.55-.15 1.4-.15 2.3v9.75c0 .85.05 1.75.15 2.25.2.9.45 1.45 1.102 2.1.65.65 1.202.9 2.103 1.1.55.1 1.402.15 2.253.15h9.764c.852 0 1.753-.05 2.253-.15.902-.2 1.453-.45 2.104-1.1.65-.65.9-1.2 1.101-2.1.1-.55.15-1.4.15-2.25V7.1c.05-.85 0-1.7-.1-2.25ZM18.024 13c0 .15-.1.25-.25.25H6.256c-.15 0-.25-.1-.25-.25v-2c0-.15.1-.25.25-.25h11.517c.15 0 .25.1.25.25v2Z" />
  </Svg>
);

Regular.iconType = 'Regular';
