import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'school-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.6499 9.49982C1.37376 9.49982 1.1499 9.72368 1.1499 9.99982V21.3502C1.1499 21.6264 1.37376 21.8502 1.6499 21.8502H22.3499C22.626 21.8502 22.8499 21.6264 22.8499 21.3502V9.99982C22.8499 9.72368 22.626 9.49982 22.3499 9.49982H18.5V5.42961C18.5 5.25598 18.4099 5.09478 18.262 5.00378L12.262 1.31147C12.1012 1.21258 11.8986 1.21258 11.7379 1.31148L5.73795 5.00378C5.59008 5.09478 5.5 5.25598 5.5 5.42961V9.49982H1.6499ZM14.375 9.375C14.375 10.6867 13.3117 11.75 12 11.75C10.6883 11.75 9.625 10.6867 9.625 9.375C9.625 8.06332 10.6883 7 12 7C13.3117 7 14.375 8.06332 14.375 9.375Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SchoolFill';
