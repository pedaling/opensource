import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabetapoint-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5446 2C10.4592 2 10.3832 2.05425 10.3555 2.13505L3.71095 21.485C3.66637 21.6149 3.76284 21.75 3.90011 21.75H5.88234C5.96724 21.75 6.04289 21.6964 6.07103 21.6163L8.00918 16.1H14.6853C15.3875 15.0569 16.4578 14.2821 17.71 13.9619L13.6488 2.13505C13.621 2.05425 13.5451 2 13.4596 2H10.5446ZM15.2221 13.9L12.0021 4.7355L8.78215 13.9H15.2221Z"
    />
    <Svg.Path d="M19.0021 22C20.659 22 22.0021 20.6569 22.0021 19C22.0021 17.3431 20.659 16 19.0021 16C17.3452 16 16.0021 17.3431 16.0021 19C16.0021 20.6569 17.3452 22 19.0021 22Z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'AlphabetAPointRegular';
