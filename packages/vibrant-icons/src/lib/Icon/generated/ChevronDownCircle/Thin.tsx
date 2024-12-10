import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.35 10.561a.2.2 0 0 0 .001.283l5.508 5.506a.2.2 0 0 0 .283 0l5.508-5.506a.2.2 0 0 0 0-.283l-.92-.92a.2.2 0 0 0-.283 0L12 14.088 7.553 9.64a.2.2 0 0 0-.282 0z" />
    <Svg.Path
      fillRule="evenodd"
      d="M12 22.85c5.992 0 10.85-4.858 10.85-10.85 0-5.993-4.858-10.85-10.85-10.85C6.007 1.15 1.15 6.007 1.15 12S6.007 22.85 12 22.85m0-20c5.045 0 9.15 4.104 9.15 9.15 0 5.045-4.105 9.15-9.15 9.15-5.046 0-9.15-4.105-9.15-9.15 0-5.046 4.104-9.15 9.15-9.15"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronDownCircleThin';
