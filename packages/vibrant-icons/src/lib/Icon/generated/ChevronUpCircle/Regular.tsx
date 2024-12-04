import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.9684 14.0856C18.0466 14.0075 18.0466 13.8808 17.9684 13.8027L12.14 7.97635C12.0619 7.89828 11.9353 7.89828 11.8572 7.97635L6.02853 13.8029C5.95039 13.881 5.95039 14.0077 6.02853 14.0858L7.20164 15.2585C7.27974 15.3365 7.40633 15.3365 7.48443 15.2585L11.9985 10.7462L16.5123 15.2585C16.5904 15.3365 16.717 15.3365 16.7951 15.2585L17.9684 14.0856Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 0.899902C5.86965 0.899902 0.900146 5.8694 0.900146 11.9999C0.900146 18.1304 5.86965 23.1004 12.0001 23.1004C18.1306 23.1004 23.1001 18.1309 23.1001 12.0004C23.1001 5.8699 18.1306 0.899902 12.0001 0.899902ZM12.0001 20.8999C7.09265 20.8999 3.10015 16.9074 3.10015 11.9999C3.10015 7.0924 7.09265 3.1004 12.0001 3.1004C16.9076 3.1004 20.9001 7.0929 20.9001 12.0004C20.9001 16.9079 16.9076 20.8999 12.0001 20.8999Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ChevronUpCircleRegular';
