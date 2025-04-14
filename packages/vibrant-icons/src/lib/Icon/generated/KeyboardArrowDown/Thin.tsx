import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboardarrowdown-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M22.5999 3.65088C22.738 3.65088 22.8499 3.76281 22.8499 3.90088V14H21.1499V5.35088H2.8499V18.649H14.75V20.349H1.3999C1.26183 20.349 1.1499 20.2371 1.1499 20.099V3.90088C1.1499 3.76281 1.26183 3.65088 1.3999 3.65088H22.5999Z" />
    <Svg.Path d="M4.625 7.5H6.375V9.25H4.625V7.5Z" />
    <Svg.Path d="M4.625 11.25H6.375V13H4.625V11.25Z" />
    <Svg.Path d="M6.375 15H4.625V16.75H6.375V15Z" />
    <Svg.Path d="M7.875 7.5H9.625V9.25H7.875V7.5Z" />
    <Svg.Path d="M9.625 11.25H7.875V13H9.625V11.25Z" />
    <Svg.Path d="M7.875 15H16.125V16.75H7.875V15Z" />
    <Svg.Path d="M12.875 7.5H11.125V9.25H12.875V7.5Z" />
    <Svg.Path d="M11.125 11.25H12.875V13H11.125V11.25Z" />
    <Svg.Path d="M16.125 7.5H14.375V9.25H16.125V7.5Z" />
    <Svg.Path d="M14.375 11.25H16.125V13H14.375V11.25Z" />
    <Svg.Path d="M19.375 7.5H17.625V9.25H19.375V7.5Z" />
    <Svg.Path d="M17.625 11.25H19.375V13H17.625V11.25Z" />
    <Svg.Path d="M19.1502 15V20.25L17.2884 18.3421L16.2119 19.6579L20.0002 22.8483L23.7884 19.6579L22.7119 18.3421L20.8502 20.25V15H19.1502Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'KeyboardArrowDownThin';
