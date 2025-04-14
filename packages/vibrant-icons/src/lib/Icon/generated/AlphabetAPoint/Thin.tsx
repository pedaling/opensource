import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabetapoint-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4194 2.38405C13.3913 2.30377 13.3156 2.25 13.2306 2.25H10.7645C10.6795 2.25 10.6038 2.30377 10.5757 2.38405L3.99133 21.234C3.94592 21.3641 4.04243 21.5 4.18014 21.5H5.64807C5.73275 21.5 5.80825 21.4467 5.83656 21.3669L7.79374 15.8499H15.5097C16.0787 15.2203 16.8158 14.7454 17.6502 14.4961L13.4194 2.38405ZM15.5983 14.1499L11.9976 4L8.39682 14.1499H15.5983Z"
    />
    <Svg.Path d="M18.998 22C20.6549 22 21.998 20.6569 21.998 19C21.998 17.3431 20.6549 16 18.998 16C17.3412 16 15.998 17.3431 15.998 19C15.998 20.6569 17.3412 22 18.998 22Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlphabetAPointThin';
