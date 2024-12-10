import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'chevrondowncircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M12 .9c2.965 0 5.752 1.154 7.848 3.25A11.03 11.03 0 0 1 23.1 12c0 2.965-1.155 5.752-3.252 7.848A11.03 11.03 0 0 1 12 23.1a11.03 11.03 0 0 1-7.85-3.252A11.03 11.03 0 0 1 .9 12c0-2.965 1.154-5.752 3.25-7.85A11.03 11.03 0 0 1 12 .9m-5.97 9.514a.2.2 0 0 0 0 .283l5.828 5.826a.2.2 0 0 0 .283 0l5.829-5.826a.2.2 0 0 0 0-.283l-1.273-1.273a.2.2 0 0 0-.283 0L12 13.554 7.586 9.142a.2.2 0 0 0-.283 0z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'ChevronDownCircleFill';
