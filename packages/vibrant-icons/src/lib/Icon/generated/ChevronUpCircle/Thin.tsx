import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.6491 13.9388C17.7272 13.8606 17.7272 13.734 17.6491 13.6559L12.1409 8.14984C12.0628 8.07177 11.9362 8.07178 11.8581 8.14985L6.35053 13.6557C6.27241 13.7338 6.2724 13.8605 6.35051 13.9386L7.27017 14.8583C7.34827 14.9364 7.47488 14.9364 7.55299 14.8583L12 10.413L16.4467 14.8584C16.5248 14.9365 16.6514 14.9365 16.7295 14.8584L17.6491 13.9388Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 1.1499C6.00764 1.1499 1.15015 6.0074 1.15015 11.9999C1.15015 17.9924 6.00764 22.8499 12.0001 22.8499C17.9926 22.8499 22.8501 17.9924 22.8501 11.9999C22.8501 6.0074 17.9926 1.1499 12.0001 1.1499ZM12.0001 21.1499C6.95465 21.1499 2.85015 17.0454 2.85015 11.9999C2.85015 6.9544 6.95465 2.8499 12.0001 2.8499C17.0456 2.8499 21.1501 6.9544 21.1501 11.9999C21.1501 17.0454 17.0456 21.1499 12.0001 21.1499Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronUpCircleThin';
