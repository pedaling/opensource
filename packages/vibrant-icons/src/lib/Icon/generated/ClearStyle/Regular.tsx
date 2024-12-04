import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.9995 21.7273C23.0776 21.6492 23.0776 21.5226 22.9995 21.4445L13.1994 11.6439V5.80038H18.1994V7.40088C18.1994 7.51134 18.2889 7.60088 18.3994 7.60088H20.3994C20.5099 7.60088 20.5994 7.51134 20.5994 7.40088V3.59988C20.5994 3.48942 20.5099 3.39988 20.3994 3.39988H4.9554L2.55532 0.999802C2.47721 0.921697 2.35058 0.921697 2.27248 0.999802L0.999817 2.27246C0.921713 2.35057 0.921712 2.4772 0.999815 2.5553L21.444 23C21.5221 23.0781 21.6487 23.0781 21.7268 23L22.9995 21.7273ZM10.7994 9.24438L7.3554 5.80038H10.7994V9.24438ZM14.6494 20.6004C14.7599 20.6004 14.8494 20.5108 14.8494 20.4004V18.3999C14.8494 18.2894 14.7599 18.1999 14.6494 18.1999H13.1994V17.2979L13.1704 17.2684L10.7994 14.8979V18.1999H9.3494C9.23894 18.1999 9.1494 18.2894 9.1494 18.3999V20.4004C9.1494 20.5108 9.23894 20.6004 9.3494 20.6004H14.6494Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ClearStyleRegular';
