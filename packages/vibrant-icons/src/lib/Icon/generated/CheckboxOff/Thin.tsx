import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'checkboxoff-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M16.1 3.25H7.9c-1.149 0-1.905.001-2.485.049-.558.045-.796.125-.936.196a2.25 2.25 0 0 0-.984.984c-.071.14-.15.378-.196.936-.048.58-.049 1.336-.049 2.485v8.2c0 1.149.001 1.905.049 2.485.045.558.125.796.196.936.216.424.56.768.984.984.14.071.378.15.936.196.58.048 1.336.049 2.485.049h8.2c1.149 0 1.905-.001 2.485-.049.558-.045.796-.125.936-.196.424-.216.768-.56.984-.983.071-.14.15-.378.196-.937.048-.58.049-1.336.049-2.485V7.9c0-1.149-.001-1.905-.049-2.485-.045-.558-.125-.796-.196-.936a2.25 2.25 0 0 0-.983-.984c-.14-.071-.378-.15-.937-.196-.58-.048-1.336-.049-2.485-.049m-14.164.434C1.5 4.54 1.5 5.66 1.5 7.9v8.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436h8.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748c.436-.856.436-1.976.436-4.216V7.9c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C19.46 1.5 18.34 1.5 16.1 1.5H7.9c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748"
      clipRule="evenodd"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'CheckboxOffThin';
