import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboard-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.899902 3.65088C0.899902 3.51281 1.01183 3.40088 1.1499 3.40088H22.8499C22.988 3.40088 23.0999 3.51281 23.0999 3.65088V20.349C23.0999 20.4871 22.988 20.599 22.8499 20.599H1.1499C1.01183 20.599 0.899902 20.4871 0.899902 20.349V3.65088ZM6.375 7.5H4.625V9.25H6.375V7.5ZM4.625 11.25H6.375V13H4.625V11.25ZM6.375 15H4.625V16.75H6.375V15ZM7.875 7.5H9.625V9.25H7.875V7.5ZM9.625 11.25H7.875V13H9.625V11.25ZM7.875 15H16.125V16.75H7.875V15ZM12.875 7.5H11.125V9.25H12.875V7.5ZM11.125 11.25H12.875V13H11.125V11.25ZM16.125 7.5H14.375V9.25H16.125V7.5ZM14.375 11.25H16.125V13H14.375V11.25ZM19.375 7.5H17.625V9.25H19.375V7.5ZM17.625 11.25H19.375V13H17.625V11.25ZM19.375 15H17.625V16.75H19.375V15Z"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'KeyboardFill';
