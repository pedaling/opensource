import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'notice-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.1499 22.8494v-7.061l-4-.9085V7.36941l20-4.5455v-1.6745h1.7V21.0994h-1.7v-1.6745l-10.1165-2.299-.1835-.041v5.7645h-5.7Zm1.7-1.7h2.3v-4.452l-2.1165-.481-.1835-.041v4.974ZM20.9664 4.60841 2.8499 8.72591v4.79699l18.1165 4.1175.1835.041V4.56691l-.1835.041v.0005Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'NoticeThin';
