import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'cashcircle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.848 4.15A11.03 11.03 0 0 0 12 .9a11.03 11.03 0 0 0-7.85 3.25A11.03 11.03 0 0 0 .9 12c0 2.965 1.154 5.752 3.25 7.848A11.03 11.03 0 0 0 12 23.1c2.965 0 5.752-1.155 7.848-3.252A11.03 11.03 0 0 0 23.1 12c0-2.965-1.155-5.752-3.252-7.85m-3.044 9.118a4.02 4.02 0 0 1-1.366 2.888c-.844.742-2.015 1.15-3.297 1.15-1.522 0-2.79-.488-3.665-1.412-.881-.93-1.347-2.286-1.347-3.92v-.007c0-1.632.468-2.985 1.353-3.914.876-.92 2.142-1.405 3.66-1.405 1.304 0 2.444.399 3.298 1.154a4.04 4.04 0 0 1 1.356 2.896v.185h-2.67l-.027-.2c-.163-1.06-.894-1.692-1.958-1.692-.656 0-1.203.267-1.583.772-.39.52-.597 1.28-.597 2.197v.007c0 1.849.838 2.997 2.187 2.997 1.063 0 1.797-.644 1.965-1.722l.03-.17h2.677z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'CashCircleFill';
