import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'listnumber-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M8.75 5.6h13c.15 0 .25-.1.25-.25V4.1c0-.15-.1-.25-.25-.25h-13c-.15.05-.25.15-.25.25v1.25c0 .15.1.25.25.25m0 7.3h13c.15 0 .25-.1.25-.25V11.4c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .1.1.25.25.25m0 7.2h13c.15 0 .25-.1.25-.25V18.6c0-.15-.1-.25-.25-.25h-13c-.15 0-.25.1-.25.25v1.25c0 .15.1.25.25.25M3.9 3.85h-.05c-.1.05-.2.1-.3.2s-.2.1-.3.2-.15.1-.25.2V3.4l.45-.3.45-.3h1.2v4H3.9zm-1.15 7.4v-.05c0-.15.05-.3.1-.45s.15-.3.25-.45.3-.25.5-.3.45-.1.7-.1c.3 0 .6.05.8.15s.4.25.55.4.2.35.2.6c0 .2-.05.4-.1.55s-.2.3-.3.4l-.3.3-.65.6v.05h1.45v.95h-3.1v-.75l1.4-1.35.2-.2c.05-.05.1-.15.15-.2s.05-.15.05-.25c0-.05 0-.1-.05-.15s-.05-.15-.1-.2-.1-.05-.2-.05-.15 0-.2.05l-.15.15c-.05.05-.05.1-.05.2v.1zm1.1 7.3h.45c.1 0 .15 0 .25-.05s.1-.05.15-.1.05-.1.05-.15c0-.1-.05-.2-.15-.25s-.2-.1-.3-.1c-.05 0-.15 0-.2.05s-.1 0-.15.05-.05.1-.1.15-.05.1-.05.15H2.7c0-.2.05-.4.15-.55s.2-.3.35-.4.3-.2.5-.25.4-.1.65-.1c.3 0 .6.05.8.15s.4.2.55.4.2.35.2.55q0 .3-.15.45c-.1.1-.2.2-.3.25s-.2.1-.3.1v.05c.15 0 .25.05.4.1q.225.075.3.3c.05.15.1.3.1.5s-.05.4-.15.55-.2.3-.4.35-.35.15-.55.2-.4.05-.6.05c-.35 0-.65-.05-.9-.2s-.4-.3-.55-.5-.2-.4-.2-.65h1.1c0 .1 0 .15.05.2s.1.1.2.15.15.05.25.05.2 0 .25-.05.15-.1.15-.15.05-.15.05-.2 0-.15-.05-.2.05.05 0 .05-.15-.05-.25-.05h-.5z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ListNumberThin';
