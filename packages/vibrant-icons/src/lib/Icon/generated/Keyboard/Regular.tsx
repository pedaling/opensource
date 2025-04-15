import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'keyboard-regular', ...props }) => (
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
      d="M23.0999 3.65088C23.0999 3.51281 22.988 3.40088 22.8499 3.40088H1.1499C1.01183 3.40088 0.899902 3.51281 0.899902 3.65088V20.349C0.899902 20.4871 1.01183 20.599 1.1499 20.599H22.8499C22.988 20.599 23.0999 20.4871 23.0999 20.349V3.65088ZM3.0999 18.399V5.60088H20.8999V18.399H3.0999Z"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'KeyboardRegular';
