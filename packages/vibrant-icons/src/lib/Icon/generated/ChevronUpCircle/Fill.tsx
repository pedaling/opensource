import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 23.0999C9.03515 23.0999 6.24815 21.9454 4.15165 19.8489C2.05465 17.7519 0.900146 14.9649 0.900146 11.9999C0.900146 9.0349 2.05515 6.2479 4.15165 4.1514C6.24815 2.0544 9.03515 0.899902 12.0001 0.899902C14.9651 0.899902 17.7526 2.0549 19.8491 4.1514C21.9456 6.2479 23.1001 9.0349 23.1001 11.9999C23.1001 14.9649 21.9456 17.7519 19.8491 19.8489C17.7521 21.9454 14.9651 23.0999 12.0001 23.0999ZM17.9702 13.7856C18.0483 13.7075 18.0483 13.5808 17.9702 13.5027L12.1418 7.67634C12.0637 7.59827 11.9371 7.59827 11.859 7.67634L6.03032 13.5029C5.95218 13.581 5.95218 13.7076 6.03032 13.7857L7.30343 15.0585C7.38153 15.1365 7.50812 15.1365 7.58622 15.0585L12.0004 10.646L16.4143 15.0583C16.4924 15.1364 16.619 15.1364 16.6971 15.0583L17.9702 13.7856Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronUpCircleFill';
