import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'like-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M19.5 8h-2.1c.15-.95.4-2 .45-3.05.05-.95 0-1.9-.6-2.7-.55-.8-1.5-1.25-2.5-1.25-.65 0-1.3.2-1.9.65-.7.5-1.1 1.3-1.25 2.15-.35 2-1.25 3.95-2.85 5.25C7.05 10.4 5 10.5 3 10.5h-.75c-.15 0-.25.1-.25.25V12c0 .15.1.25.25.25H3c.9 0 1.9-.05 2.9-.2v8.2H2.3c-.2 0-.3.1-.3.25v1.25c0 .15.1.25.25.25H15c3.85 0 7-3.15 7-7v-4.5C22 9.1 20.9 8 19.5 8Zm.75 7c0 2.9-2.35 5.25-5.25 5.25H7.65v-8.6c.75-.25 1.5-.65 2.2-1.2 1.8-1.45 3-3.65 3.5-6.3.1-.5.35-.95.7-1.15.2-.15.45-.2.7-.2h.05c.45 0 .9.2 1.15.6.2.3.3.75.25 1.5-.05.7-.2 1.45-.3 2.2-.05.25-.1.45-.1.7l-.3 1.75c-.05.15.1.3.25.3h3.75c.25 0 .45.15.55.2.1.1.2.25.2.55V15Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'LikeThin';
