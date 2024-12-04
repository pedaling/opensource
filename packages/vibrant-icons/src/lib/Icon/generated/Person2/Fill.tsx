import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'person2-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.85 0C4.37853 0 2.375 2.00353 2.375 4.475C2.375 6.94647 4.37853 8.95 6.85 8.95C9.32147 8.95 11.325 6.94647 11.325 4.475C11.325 2.00353 9.32147 0 6.85 0Z" />
    <Svg.Path d="M16.6 3C14.4047 3 12.625 4.77967 12.625 6.975C12.625 9.17033 14.4047 10.95 16.6 10.95C18.7953 10.95 20.575 9.17033 20.575 6.975C20.575 4.77967 18.7953 3 16.6 3Z" />
    <Svg.Path d="M16.6 11.75C15.1001 11.75 13.7515 12.3975 12.8183 13.4282C11.6528 11.2862 9.44136 9.75 6.85 9.75C3.00728 9.75 0 13.1282 0 16.85V19.75C0 19.8605 0.0895429 19.95 0.2 19.95H11.5501C11.6606 19.95 11.7501 19.8605 11.7501 19.75V17.3C11.7501 17.1895 11.8396 17.1 11.9501 17.1H13.2501C13.3606 17.1 13.4501 17.1895 13.4501 17.3V19.75C13.4501 19.8605 13.5396 19.95 13.6501 19.95H21.5C21.6105 19.95 21.7 19.8605 21.7 19.75V16.85C21.7 14.0333 19.4167 11.75 16.6 11.75Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'Person2Fill';
