import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkboxindeterminate-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.38 4.85c-.2-.9-.45-1.45-1.101-2.1s-1.202-.9-2.104-1.1c-.55-.1-1.402-.15-2.303-.15H7.108c-.851 0-1.753.05-2.253.15-.852.2-1.402.45-2.103 1.1C2.1 3.45 1.85 4 1.65 4.85c-.1.55-.15 1.4-.15 2.3v9.75c0 .85.05 1.75.15 2.25.2.9.45 1.45 1.102 2.1.65.65 1.201.9 2.103 1.1.55.1 1.402.15 2.253.15h9.764c.851 0 1.753-.05 2.253-.15.902-.2 1.453-.45 2.103-1.1s.902-1.2 1.102-2.1c.1-.55.15-1.4.15-2.25V7.1c.05-.85 0-1.7-.1-2.25m-4.356 7.75c0 .15-.1.25-.25.25H6.256c-.15 0-.25-.1-.25-.25v-1.25c0-.15.1-.25.25-.25h11.516c.15 0 .25.1.25.25v1.25Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckboxIndeterminateThin';
