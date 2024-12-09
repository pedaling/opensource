import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronrightcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M10.311 17.649a.2.2 0 0 0 .283 0L16.1 12.14a.2.2 0 0 0 0-.283L10.594 6.35a.2.2 0 0 0-.283 0l-.92.92a.2.2 0 0 0 0 .283L13.838 12 9.39 16.446a.2.2 0 0 0 0 .283z" />
    <Svg.Path
      fillRule="evenodd"
      d="M22.85 12c0-5.993-4.858-10.85-10.85-10.85C6.007 1.15 1.15 6.007 1.15 12S6.007 22.85 12 22.85 22.85 17.992 22.85 12m-20 0c0-5.046 4.104-9.15 9.15-9.15 5.045 0 9.15 4.104 9.15 9.15 0 5.045-4.105 9.15-9.15 9.15-5.046 0-9.15-4.105-9.15-9.15"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronRightCircleThin';
