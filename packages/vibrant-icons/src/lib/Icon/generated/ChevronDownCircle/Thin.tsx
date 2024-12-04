import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.35092 10.5611C6.27281 10.6392 6.27282 10.7658 6.35095 10.8439L11.8591 16.35C11.9372 16.428 12.0638 16.428 12.1419 16.35L17.6495 10.8441C17.7276 10.766 17.7276 10.6393 17.6495 10.5612L16.7299 9.64153C16.6518 9.56344 16.5252 9.56342 16.4471 9.6415L12 14.0868L7.55339 9.64138C7.47529 9.5633 7.34867 9.5633 7.27057 9.6414L6.35092 10.5611Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 22.8499C17.9924 22.8499 22.8499 17.9924 22.8499 11.9999C22.8499 6.0074 17.9924 1.1499 11.9999 1.1499C6.0074 1.1499 1.1499 6.0074 1.1499 11.9999C1.1499 17.9924 6.0074 22.8499 11.9999 22.8499ZM11.9999 2.8499C17.0454 2.8499 21.1499 6.9544 21.1499 11.9999C21.1499 17.0454 17.0454 21.1499 11.9999 21.1499C6.9544 21.1499 2.8499 17.0454 2.8499 11.9999C2.8499 6.9544 6.9544 2.8499 11.9999 2.8499Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronDownCircleThin';
