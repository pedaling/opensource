import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hot-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 20.1c-1.042 0-1.85-2.07-1.85-3.85 0-1.678.76-2.85 1.85-2.85s1.85 1.172 1.85 2.85c0 1.78-.808 3.85-1.85 3.85m10.1-6.475c0-1.232-.286-2.446-.872-3.71-.453-.974-1.065-1.943-1.927-3.048-.355-.455-.77-.885-1.209-1.34C16.785 4.17 15.433 2.769 15.433.5V.387L15.321.4c-4.073.483-6.593 2.44-7.99 3.995-1.662 1.851-2.664 4.217-2.696 6.35-.74-.041-1.376-.547-1.675-1.34l-.08-.215-.102.208c-.646 1.321-.877 3.05-.877 4.228C1.9 18.938 6.337 23.1 12 23.1s10.1-4.162 10.1-9.475m-15.545-.383.12-.002.103-.002-.006-.104c-.11-1.847.057-3.346.508-4.584.436-1.194 1.099-2.028 1.689-2.685.854-.951 2.357-2.22 4.687-2.894.638 1.787 1.864 3.058 2.853 4.083.398.412.773.802 1.057 1.166 1.614 2.069 2.334 3.736 2.334 5.405 0 4.08-3.47 7.275-7.9 7.275s-7.9-3.196-7.9-7.275q0-.347.03-.714c.515.13 1.543.33 2.424.33" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'HotRegular';
