import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hot-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M11.9999 20.0998C10.9579 20.0998 10.1499 18.0303 10.1499 16.2498C10.1499 14.5718 10.9104 13.3998 11.9999 13.3998C13.0894 13.3998 13.8499 14.5718 13.8499 16.2498C13.8499 18.0303 13.0419 20.0998 11.9999 20.0998ZM22.0999 13.6248C22.0999 12.3928 21.8144 11.1793 21.2279 9.91521C20.7754 8.94071 20.1629 7.97171 19.3009 6.86671C18.9464 6.41221 18.5314 5.98221 18.0924 5.52671C16.7849 4.17121 15.4334 2.76921 15.4334 0.499707V0.387207L15.3214 0.400207C11.2484 0.883207 8.72839 2.83921 7.33139 4.39521C5.66939 6.24621 4.66689 8.61171 4.63539 10.7453C3.89539 10.7038 3.25939 10.1983 2.96039 9.40521L2.87889 9.18871L2.77739 9.39671C2.13089 10.7183 1.90039 12.4473 1.90039 13.6248C1.90039 18.9378 6.33689 23.0998 12.0004 23.0998C17.6639 23.0998 22.1004 18.9378 22.1004 13.6248H22.0999Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HotFill';
