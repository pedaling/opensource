import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'person-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 14.0999C7.93674 14.0999 4.5999 17.5008 4.5999 21.7499H2.8999C2.8999 16.6101 6.95037 12.3999 11.9999 12.3999C17.0494 12.3999 21.0999 16.6101 21.0999 21.7499H19.3999C19.3999 17.5008 16.0631 14.0999 11.9999 14.0999Z"
    />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 2.8499C10.1221 2.8499 8.5999 4.37213 8.5999 6.2499C8.5999 8.12767 10.1221 9.6499 11.9999 9.6499C13.8777 9.6499 15.3999 8.12767 15.3999 6.2499C15.3999 4.37213 13.8777 2.8499 11.9999 2.8499ZM6.8999 6.2499C6.8999 3.43325 9.18325 1.1499 11.9999 1.1499C14.8166 1.1499 17.0999 3.43325 17.0999 6.2499C17.0999 9.06655 14.8166 11.3499 11.9999 11.3499C9.18325 11.3499 6.8999 9.06655 6.8999 6.2499Z"
    />
  </Svg>
);

Thin.iconType = 'Thin';
