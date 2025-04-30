import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkerboardshield-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12.003 2.16 4.15 5.105v8.893c0 .021.074 2.209 1.95 3.891 1.772 1.59 5.347 3.627 5.903 3.94.545-.309 4.013-2.291 5.898-3.941 1.922-1.681 1.95-3.866 1.95-3.887V5.104zM7.236 16.625c-1.233-1.107-1.374-2.51-1.386-2.665V11.5h6.151l.001-7.524.053.02 6.094 2.286V11.5h-6.148l-.002 8.365-.076-.044c-.988-.583-3.422-2.062-4.688-3.197" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckerBoardShieldThin';
