import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'hot-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.6 16.25c0 1.783-.808 3.6-1.6 3.6-.793 0-1.6-1.817-1.6-3.6 0-1.531.658-2.6 1.6-2.6s1.6 1.069 1.6 2.6m8.25-2.625c0 5.173-4.327 9.225-9.85 9.225-5.524 0-9.85-4.052-9.85-9.225 0-1.063.19-2.583.716-3.82.392.744 1.084 1.193 1.869 1.193h.15v-.15c0-2.1.984-4.45 2.633-6.285C8.867 3.06 11.288 1.176 15.186.67c.067 2.273 1.478 3.736 2.727 5.03.434.451.845.877 1.191 1.321.85 1.09 1.453 2.043 1.898 3 .57 1.23.849 2.41.849 3.604zm-1.7 0c0-1.729-.736-3.443-2.387-5.559-.291-.374-.672-.768-1.074-1.185-.988-1.024-2.217-2.299-2.828-4.08l-.046-.135-.136.039c-2.44.684-4.01 2.005-4.897 2.993-1.211 1.35-2.482 3.137-2.269 7.294-.853-.007-1.917-.213-2.432-.351l-.17-.046-.018.176q-.043.441-.043.855c0 4.22 3.58 7.525 8.15 7.525s8.15-3.306 8.15-7.525z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'HotThin';
