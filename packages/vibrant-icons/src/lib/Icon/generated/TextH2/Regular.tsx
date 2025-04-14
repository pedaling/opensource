import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth2-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.413 21.4529V22.75H23.3762V21.1497L20.367 21.218C20.367 21.218 21.4665 20.1811 21.7363 19.907C21.9554 19.6844 22.5309 19.0311 22.7895 18.6736C23.0852 18.2649 23.226 17.6789 23.226 17.1094C23.226 16.6939 23.1036 16.2503 22.9102 15.9296C22.6984 15.5783 22.3087 15.2496 21.86 15.0497C21.4043 14.8517 20.8591 14.75 20.2351 14.75C19.6987 14.75 19.236 14.8271 18.8609 14.9796C18.5327 15.1001 18.2341 15.2894 17.9853 15.5349C17.7365 15.7804 17.5431 16.0764 17.4183 16.4029C17.3096 16.6922 17.2535 16.9831 17.25 17.2706H19.2482C19.2401 17.0205 19.3378 16.771 19.5136 16.5929C19.6894 16.4148 20.0171 16.3188 20.2821 16.3188C20.5471 16.3188 20.7377 16.3744 20.8779 16.4795C21.1688 16.6977 21.2641 16.9529 21.2651 17.2706C21.2661 17.6952 20.9682 18.159 20.6856 18.4596C19.6691 19.5533 17.413 21.4529 17.413 21.4529Z" />
    <Svg.Path d="M13.3005 21V13.1754H4.15V21H1.75V3H4.15V10.7754H13.3V3H15.7V21H13.3005Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'TextH2Regular';
