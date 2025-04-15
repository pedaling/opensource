import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabeta-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6466 2.13505C13.6188 2.05425 13.5429 2 13.4574 2H10.5424C10.457 2 10.381 2.05425 10.3533 2.13505L3.70876 21.485C3.66417 21.6149 3.76064 21.75 3.89791 21.75H5.88014C5.96504 21.75 6.04069 21.6964 6.06883 21.6163L8.00703 16.0999H15.9928L17.931 21.6163C17.9592 21.6964 18.0348 21.75 18.1197 21.75H20.1019C20.2392 21.75 20.3357 21.6149 20.2911 21.485L13.6466 2.13505ZM15.2199 13.8999L11.9999 4.7355L8.78 13.8999H15.2199Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'AlphabetAFill';
