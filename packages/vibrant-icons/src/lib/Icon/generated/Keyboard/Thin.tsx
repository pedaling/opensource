import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboard-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M6.375 7.5H4.625V9.25H6.375V7.5Z" />
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
    <Svg.Path d="M19.375 15H17.625V16.75H19.375V15Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.8499 3.90088C22.8499 3.76281 22.738 3.65088 22.5999 3.65088H1.3999C1.26183 3.65088 1.1499 3.76281 1.1499 3.90088V20.099C1.1499 20.2371 1.26183 20.349 1.3999 20.349H22.5999C22.738 20.349 22.8499 20.2371 22.8499 20.099V3.90088ZM2.8499 18.649V5.35088H21.1499V18.649H2.8499Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'KeyboardThin';
