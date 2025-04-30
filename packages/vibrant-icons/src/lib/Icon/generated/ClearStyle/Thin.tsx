import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'clearstyle-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M4.102 2.9 2.601 1.399 1.399 2.6l20 20 1.202-1.202-9.647-9.647V4.8h6.25v1.6c0 .111.09.2.2.2h1.5a.2.2 0 0 0 .2-.2V3.1c0-.06-.103-.115-.172-.152-.057-.03-.091-.048-.028-.048zm1.9 1.9 5.047 5.047V4.8z"
      clipRule="evenodd"
    />
    <Svg.Path d="M11.05 19.2v-4.548l1.904 1.904V19.2h1.45c.11 0 .2.09.2.2v1.5a.2.2 0 0 1-.2.2H9.599a.2.2 0 0 1-.2-.2v-1.5c0-.11.09-.2.2-.2z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ClearStyleThin';
