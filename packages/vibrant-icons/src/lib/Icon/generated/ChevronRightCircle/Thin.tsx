import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.3111 17.6489C10.3892 17.727 10.5158 17.727 10.5939 17.6489L16.1 12.1407C16.178 12.0626 16.178 11.936 16.1 11.8579L10.5941 6.35029C10.516 6.27216 10.3893 6.27215 10.3112 6.35027L9.39153 7.26993C9.31344 7.34802 9.31342 7.47464 9.3915 7.55275L13.8368 11.9998L9.39138 16.4464C9.3133 16.5245 9.3133 16.6511 9.3914 16.7292L10.3111 17.6489Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.8499 11.9999C22.8499 6.0074 17.9924 1.1499 11.9999 1.1499C6.0074 1.1499 1.1499 6.0074 1.1499 11.9999C1.1499 17.9924 6.0074 22.8499 11.9999 22.8499C17.9924 22.8499 22.8499 17.9924 22.8499 11.9999ZM2.8499 11.9999C2.8499 6.9544 6.9544 2.8499 11.9999 2.8499C17.0454 2.8499 21.1499 6.9544 21.1499 11.9999C21.1499 17.0454 17.0454 21.1499 11.9999 21.1499C6.9544 21.1499 2.8499 17.0454 2.8499 11.9999Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronRightCircleThin';
