import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'strikethrogh-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 2.575c-3.901 0-6.425 2.696-6.425 5.175 0 1.423.63 2.553 1.593 3.4H2v1.7h8.528q.635.181 1.296.308c1.523.295 2.825.648 3.734 1.176.861.501 1.267 1.089 1.267 1.916 0 .942-.411 1.735-1.199 2.32-.809.601-2.055 1.005-3.703 1.005-1.343 0-2.622-.479-3.552-1.22-.935-.744-1.446-1.687-1.446-2.605h-1.85c0 1.626.895 3.058 2.144 4.053 1.254.998 2.937 1.622 4.704 1.622 1.929 0 3.596-.47 4.807-1.37 1.231-.915 1.945-2.246 1.945-3.805 0-1.587-.844-2.673-1.997-3.4H22v-1.7H11.324c-1.085-.283-2.001-.678-2.67-1.176-.81-.603-1.229-1.326-1.229-2.224C7.425 6.5 8.9 4.425 12 4.425c2.658 0 4.375 1.74 4.375 3.381h1.85c0-2.97-2.883-5.23-6.225-5.23" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'StrikethroghThin';
