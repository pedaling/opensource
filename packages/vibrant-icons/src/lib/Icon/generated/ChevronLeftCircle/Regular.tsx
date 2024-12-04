import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronleftcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.5863 6.03163C13.5082 5.95349 13.3815 5.95349 13.3034 6.03163L7.47709 11.86C7.39901 11.9381 7.39901 12.0647 7.47708 12.1428L13.3036 17.9715C13.3817 18.0497 13.5084 18.0497 13.5865 17.9715L14.7592 16.7984C14.8373 16.7203 14.8373 16.5937 14.7592 16.5156L10.2469 12.0016L14.7592 7.4877C14.8373 7.4096 14.8373 7.283 14.7592 7.2049L13.5863 6.03163Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.900146 11.9999C0.900146 18.1304 5.86965 23.0999 12.0001 23.0999C18.1306 23.0999 23.1006 18.1304 23.1006 11.9999C23.1006 5.8694 18.1311 0.899902 12.0006 0.899902C5.87015 0.899902 0.900146 5.8694 0.900146 11.9999ZM20.9001 11.9999C20.9001 16.9074 16.9076 20.8999 12.0001 20.8999C7.09265 20.8999 3.10065 16.9074 3.10065 11.9999C3.10065 7.0924 7.09315 3.0999 12.0006 3.0999C16.9081 3.0999 20.9001 7.0924 20.9001 11.9999Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronLeftCircleRegular';
