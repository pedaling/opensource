import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkboxoff-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M16.1 4H7.9c-1.161 0-1.882.002-2.424.046-.509.042-.639.108-.657.117a1.5 1.5 0 0 0-.656.656c-.009.018-.075.148-.117.657C4.002 6.018 4 6.74 4 7.9v8.2c0 1.161.002 1.882.046 2.424.042.509.108.639.117.657a1.5 1.5 0 0 0 .656.655c.018.01.148.076.657.118.542.044 1.263.046 2.424.046h8.2c1.161 0 1.882-.002 2.424-.046.509-.042.639-.108.657-.117a1.5 1.5 0 0 0 .655-.656c.01-.018.076-.148.118-.657.044-.542.046-1.263.046-2.424V7.9c0-1.161-.002-1.882-.046-2.424-.042-.509-.108-.639-.117-.657a1.5 1.5 0 0 0-.656-.656c-.018-.009-.148-.075-.657-.117C17.982 4.002 17.26 4 16.1 4M1.936 3.684C1.5 4.54 1.5 5.66 1.5 7.9v8.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436h8.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.856.436-1.976.436-4.216V7.9c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C19.46 1.5 18.34 1.5 16.1 1.5H7.9c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'CheckboxOffRegular';
