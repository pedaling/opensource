import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hot-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 20.1c-1.042 0-1.85-2.07-1.85-3.85 0-1.678.76-2.85 1.85-2.85s1.85 1.172 1.85 2.85c0 1.78-.808 3.85-1.85 3.85m10.1-6.475c0-1.232-.286-2.446-.872-3.71-.453-.974-1.065-1.943-1.927-3.048-.355-.455-.77-.885-1.209-1.34C16.785 4.17 15.433 2.769 15.433.5V.387L15.321.4c-4.073.483-6.593 2.44-7.99 3.995-1.662 1.851-2.664 4.217-2.696 6.35-.74-.041-1.376-.547-1.675-1.34l-.08-.215-.102.208c-.646 1.321-.877 3.05-.877 4.228C1.9 18.938 6.337 23.1 12 23.1s10.1-4.162 10.1-9.475" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'HotFill';
