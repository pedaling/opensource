import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.0414 10.4143C5.96326 10.4924 5.96326 10.6191 6.0414 10.6972L11.8698 16.5236C11.9479 16.6016 12.0745 16.6016 12.1526 16.5236L17.9813 10.697C18.0594 10.6189 18.0594 10.4923 17.9813 10.4141L16.8082 9.24144C16.7301 9.16337 16.6035 9.16337 16.5254 9.24144L12.0113 13.7537L7.49746 9.24145C7.41936 9.16337 7.29277 9.16337 7.21467 9.24145L6.0414 10.4143Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 23.1004C18.1304 23.1004 23.0999 18.1309 23.0999 12.0004C23.0999 5.8699 18.1304 0.899902 11.9999 0.899902C5.8694 0.899902 0.899902 5.8694 0.899902 11.9999C0.899902 18.1304 5.8694 23.1004 11.9999 23.1004ZM11.9999 3.1004C16.9074 3.1004 20.8999 7.0929 20.8999 12.0004C20.8999 16.9079 16.9074 20.8999 11.9999 20.8999C7.0924 20.8999 3.0999 16.9074 3.0999 11.9999C3.0999 7.0924 7.0924 3.1004 11.9999 3.1004Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronDownCircleRegular';
