import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M.9 12a11.03 11.03 0 0 1 3.25-7.849A11.03 11.03 0 0 1 12 .9c2.965 0 5.752 1.155 7.848 3.251A11.03 11.03 0 0 1 23.1 12c0 2.965-1.155 5.752-3.252 7.849A11.03 11.03 0 0 1 12 23.099a11.03 11.03 0 0 1-7.85-3.25 11.03 11.03 0 0 1-3.25-7.85m9.714 5.97a.2.2 0 0 0 .283 0l5.827-5.828a.2.2 0 0 0 0-.283L10.897 6.03a.2.2 0 0 0-.283 0L9.341 7.303a.2.2 0 0 0 0 .283L13.754 12l-4.412 4.414a.2.2 0 0 0 0 .283z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronRightCircleFill';
