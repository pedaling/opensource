import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'personslash-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M12 1.15a5.1 5.1 0 0 0-5.073 4.575L2.742 1.54a.2.2 0 0 0-.282 0l-.92.92a.2.2 0 0 0 0 .282L21.258 22.46a.2.2 0 0 0 .282 0l.92-.92a.2.2 0 0 0 0-.282l-9.935-9.935A5.1 5.1 0 0 0 12 1.15m-1.492 8.156a3.4 3.4 0 1 0 2.984-6.112 3.4 3.4 0 0 0-2.984 6.112"
      clipRule="evenodd"
    />
    <Svg.Path d="M2.9 21.75c0-4.158 2.65-7.707 6.336-8.912l1.393 1.393c-3.417.664-6.03 3.76-6.03 7.519z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PersonSlashThin';
