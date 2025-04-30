import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboardarrowdown-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M1.15 3.4a.25.25 0 0 0-.25.25v16.7c0 .138.112.25.25.25h14.1v-6.1h7.85V3.65a.25.25 0 0 0-.25-.25zm3.475 4.1h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zM4.625 15h1.75v1.75h-1.75zm5-7.5h-1.75v1.75h1.75zm-1.75 3.75h1.75V13h-1.75zM13.8 15H7.875v1.75H13.8zm-2.675-7.5h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zm1.5-3.75h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75zm1.5-3.75h1.75v1.75h-1.75zm1.75 3.75h-1.75V13h1.75z"
      clipRule="evenodd"
    />
    <Svg.Path d="M19.15 20.25V15.5h1.7v4.75l1.862-1.908 1.076 1.316L20 22.848l-3.788-3.19 1.076-1.316z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'KeyboardArrowDownFill';
