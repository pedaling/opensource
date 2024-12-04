import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'searchtext-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.8 4.8499C13.9105 4.8499 14 4.76036 14 4.6499V3.3499C14 3.23945 13.9105 3.1499 13.8 3.1499H2.2C2.08954 3.1499 2 3.23945 2 3.3499V4.6499C2 4.76036 2.08954 4.8499 2.2 4.8499H13.8Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.1499 13.9486C7.1499 10.1938 10.1938 7.1499 13.9486 7.1499C17.7035 7.1499 20.7474 10.1938 20.7474 13.9486C20.7474 15.5198 20.2145 16.9664 19.3195 18.1177L23.1004 21.8986L21.8983 23.1006L18.1174 19.3197C16.9662 20.2145 15.5196 20.7474 13.9486 20.7474C10.1938 20.7474 7.1499 17.7035 7.1499 13.9486ZM13.9486 8.8499C11.1327 8.8499 8.8499 11.1327 8.8499 13.9486C8.8499 16.7646 11.1327 19.0474 13.9486 19.0474C16.7646 19.0474 19.0474 16.7646 19.0474 13.9486C19.0474 11.1327 16.7646 8.8499 13.9486 8.8499Z"
    />
    <Svg.Path d="M7 9.1499C7 9.26036 6.91046 9.3499 6.8 9.3499H2.2C2.08954 9.3499 2 9.26036 2 9.1499V7.8499C2 7.73945 2.08954 7.6499 2.2 7.6499H6.8C6.91046 7.6499 7 7.73945 7 7.8499V9.1499Z" />
    <Svg.Path d="M4.8 13.8499C4.91046 13.8499 5 13.7604 5 13.6499V12.3499C5 12.2394 4.91046 12.1499 4.8 12.1499H2.2C2.08954 12.1499 2 12.2394 2 12.3499V13.6499C2 13.7604 2.08954 13.8499 2.2 13.8499H4.8Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'SearchTextThin';
