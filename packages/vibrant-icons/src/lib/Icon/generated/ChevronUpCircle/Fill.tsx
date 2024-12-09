import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M12 23.1a11.03 11.03 0 0 1-7.848-3.251A11.03 11.03 0 0 1 .9 11.999c0-2.964 1.155-5.751 3.252-7.848A11.03 11.03 0 0 1 12 .9c2.965 0 5.753 1.155 7.85 3.251A11.03 11.03 0 0 1 23.1 12c0 2.965-1.154 5.752-3.25 7.849a11.03 11.03 0 0 1-7.85 3.25m5.97-9.314a.2.2 0 0 0 0-.283l-5.828-5.827a.2.2 0 0 0-.283 0L6.03 13.503a.2.2 0 0 0 0 .283l1.273 1.273a.2.2 0 0 0 .283 0L12 10.646l4.414 4.412a.2.2 0 0 0 .283 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronUpCircleFill';
