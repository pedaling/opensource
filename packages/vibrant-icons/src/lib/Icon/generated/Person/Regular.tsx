import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'person-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 14.3499C8.08179 14.3499 4.8499 17.6318 4.8499 21.7499H2.6499C2.6499 16.4792 6.80532 12.1499 11.9999 12.1499C17.1945 12.1499 21.3499 16.4792 21.3499 21.7499H19.1499C19.1499 17.6318 15.918 14.3499 11.9999 14.3499Z"
    />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 3.3499C10.3983 3.3499 9.0999 4.64828 9.0999 6.2499C9.0999 7.85153 10.3983 9.1499 11.9999 9.1499C13.6015 9.1499 14.8999 7.85153 14.8999 6.2499C14.8999 4.64828 13.6015 3.3499 11.9999 3.3499ZM6.8999 6.2499C6.8999 3.43325 9.18325 1.1499 11.9999 1.1499C14.8166 1.1499 17.0999 3.43325 17.0999 6.2499C17.0999 9.06655 14.8166 11.3499 11.9999 11.3499C9.18325 11.3499 6.8999 9.06655 6.8999 6.2499Z"
    />
  </Svg>
);

Regular.iconType = 'Regular';
