import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'dollarcircle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 22.85a10.78 10.78 0 0 1-7.673-3.178A10.78 10.78 0 0 1 1.15 12c0-2.899 1.129-5.623 3.177-7.673A10.78 10.78 0 0 1 12 1.15c2.898 0 5.623 1.129 7.672 3.177A10.78 10.78 0 0 1 22.85 12c0 2.898-1.13 5.623-3.178 7.672A10.78 10.78 0 0 1 12 22.85m0-20c-5.046 0-9.15 4.104-9.15 9.15 0 5.045 4.104 9.15 9.15 9.15 5.045 0 9.15-4.105 9.15-9.15 0-5.046-4.105-9.15-9.15-9.15m-.725 15.25v-1.563l-.13-.017c-1.726-.22-2.73-1.116-2.83-2.523h1.882c.157.63.883 1.047 1.83 1.047 1.001 0 1.648-.438 1.648-1.115v-.006c0-.674-.586-.92-1.6-1.119l-.94-.178c-1.76-.326-2.652-1.162-2.652-2.486v-.007c0-1.396 1.022-2.426 2.666-2.687l.126-.02V5.9h1.45v1.526l.128.019c1.602.234 2.563 1.15 2.64 2.513H13.62c-.112-.64-.746-1.047-1.638-1.047s-1.49.417-1.49 1.064v.006c0 .703.74.937 1.538 1.087l.94.178c1.907.367 2.721 1.11 2.721 2.48v.007c0 1.524-1.034 2.538-2.837 2.783l-.13.017V18.1z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'DollarCircleThin';
