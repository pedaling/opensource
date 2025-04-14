import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth3-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M20.3575 22.7401C18.6805 22.7401 17.5155 21.9171 17.3585 20.6341H18.949C19.065 21.1471 19.618 21.4876 20.352 21.4876C21.155 21.4876 21.6945 21.0581 21.6945 20.4196V20.4091C21.6945 19.6991 21.1505 19.2921 20.2015 19.2921H19.508V18.2551H20.191C21.023 18.2551 21.56 17.8396 21.56 17.1966V17.1861C21.56 16.5636 21.093 16.1766 20.341 16.1766C19.639 16.1766 19.1355 16.5256 19.0335 17.0736H17.539C17.6765 15.7991 18.7415 15.0106 20.341 15.0106C21.9405 15.0106 23.0915 15.7596 23.0915 16.9176V16.9281C23.0915 17.9021 22.3245 18.5744 21.606 18.7184L21.4855 18.7424L21.62 18.7564C22.7495 18.8704 23.397 19.5941 23.397 20.5211V20.5321C23.397 21.1876 23.1195 21.7391 22.5935 22.1281C22.0535 22.5281 21.2805 22.7401 20.3575 22.7401Z" />
    <Svg.Path d="M13.549 12.9251V21H15.4495V3H13.5495V11.0256H3.9V3H2V21H3.9V12.9251H13.549Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextH3Thin';
