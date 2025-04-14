import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.22217 2.7778L21.2222 22.7778L22.7778 21.2222L13.2 11.6443V5.0504H18.9493V6.6509C18.9493 6.76136 19.0388 6.8509 19.1493 6.8509H21.1493C21.2598 6.8509 21.3494 6.76136 21.3494 6.6509V2.8499C21.3494 2.73944 21.2598 2.6499 21.1493 2.6499H4.20554L2.7778 1.22217L1.22217 2.7778ZM6.60604 5.0504L10.7993 9.24368V5.0504H6.60604Z"
    />
    <Svg.Path d="M10.7993 18.9499V15.355L13.2 17.7556V18.9499H14.6493C14.7597 18.9499 14.85 19.0394 14.85 19.1499V21.1504C14.85 21.2609 14.7604 21.3504 14.6499 21.3504H9.34998C9.23952 21.3504 9.14929 21.2609 9.14929 21.1504V19.1499C9.14929 19.0394 9.23891 18.9499 9.34937 18.9499H10.7993Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ClearStyleFill';
