import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'laurel-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M3.722 9.279q.122.26.266.5c-1.599.198-2.965 1.055-3.58 1.985.095 1.579 1.574 3.787 3.99 4.434q.459.122.91.161c-.828 1.203-1.066 2.662-.8 3.657 1.132.916 3.522 1.29 5.409.065 1.12-.727 1.796-1.844 2.083-2.926.287 1.082.964 2.2 2.083 2.926 1.887 1.226 4.277.851 5.408-.065.266-.995.03-2.454-.8-3.657q.453-.04.91-.161c2.416-.647 3.894-2.855 3.99-4.434-.615-.93-1.98-1.787-3.58-1.985q.145-.24.267-.5c1.056-2.266.316-4.818-.833-5.905-1.57-.181-4.002.892-5.058 3.158-.942 2.02-.455 4.268.475 5.502-.556.756-.879 1.582-.929 2.287-.77.108-1.454.381-1.933.748-.48-.367-1.164-.64-1.934-.748-.05-.705-.373-1.53-.929-2.286.93-1.234 1.418-3.483.476-5.503-1.057-2.266-3.488-3.34-5.059-3.158-1.148 1.087-1.889 3.639-.832 5.905" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'LaurelFill';
