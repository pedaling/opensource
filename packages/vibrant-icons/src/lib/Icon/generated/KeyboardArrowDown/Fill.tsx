import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboardarrowdown-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.1499 3.40088C1.01183 3.40088 0.899902 3.51281 0.899902 3.65088V20.349C0.899902 20.4871 1.01183 20.599 1.1499 20.599H15.25V14.5H23.0999V3.65088C23.0999 3.51281 22.988 3.40088 22.8499 3.40088H1.1499ZM4.625 7.5H6.375V9.25H4.625V7.5ZM6.375 11.25H4.625V13H6.375V11.25ZM4.625 15H6.375V16.75H4.625V15ZM9.625 7.5H7.875V9.25H9.625V7.5ZM7.875 11.25H9.625V13H7.875V11.25ZM13.8 15H7.875V16.75H13.8V15ZM11.125 7.5H12.875V9.25H11.125V7.5ZM12.875 11.25H11.125V13H12.875V11.25ZM14.375 7.5H16.125V9.25H14.375V7.5ZM16.125 11.25H14.375V13H16.125V11.25ZM17.625 7.5H19.375V9.25H17.625V7.5ZM19.375 11.25H17.625V13H19.375V11.25Z"
    />
    <Svg.Path d="M19.1502 20.25V15.5H20.8502V20.25L22.7119 18.3421L23.7884 19.6579L20.0002 22.8483L16.2119 19.6579L17.2884 18.3421L19.1502 20.25Z" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'KeyboardArrowDownFill';
