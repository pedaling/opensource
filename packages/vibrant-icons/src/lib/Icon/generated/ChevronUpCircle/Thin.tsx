import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevronupcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M17.65 13.939a.2.2 0 0 0 0-.283L12.14 8.15a.2.2 0 0 0-.282 0l-5.507 5.506a.2.2 0 0 0 0 .283l.92.92a.2.2 0 0 0 .282 0L12 10.412l4.447 4.445a.2.2 0 0 0 .283 0z" />
    <Svg.Path
      fillRule="evenodd"
      d="M12 1.15C6.008 1.15 1.15 6.007 1.15 12S6.008 22.85 12 22.85c5.993 0 10.85-4.858 10.85-10.85 0-5.993-4.857-10.85-10.85-10.85m0 20c-5.045 0-9.15-4.105-9.15-9.15 0-5.046 4.105-9.15 9.15-9.15 5.046 0 9.15 4.104 9.15 9.15 0 5.045-4.104 9.15-9.15 9.15"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ChevronUpCircleThin';
