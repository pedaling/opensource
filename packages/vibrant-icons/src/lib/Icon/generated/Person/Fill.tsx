import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Fill: IconComponent<IconProps, 'Fill'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'person-fill',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M2.89989 21.7499C2.76182 21.7499 2.64957 21.6373 2.65303 21.4993C2.78228 16.3426 6.88789 12.1499 11.9999 12.1499C17.1119 12.1499 21.2175 16.3426 21.3468 21.4993C21.3502 21.6373 21.238 21.7499 21.0999 21.7499H2.89989Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.89989 6.2499C6.89989 3.43325 9.18324 1.1499 11.9999 1.1499C14.8165 1.1499 17.0999 3.43325 17.0999 6.2499C17.0999 9.06655 14.8165 11.3499 11.9999 11.3499C9.18324 11.3499 6.89989 9.06655 6.89989 6.2499Z"
    />
  </Svg>
);

Fill.iconType = 'Fill';
