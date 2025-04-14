import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'alphabeta-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4218 2.38405C13.3938 2.30377 13.318 2.25 13.233 2.25H10.767C10.682 2.25 10.6062 2.30377 10.5782 2.38405L3.99377 21.234C3.94836 21.3641 4.04487 21.5 4.18259 21.5H5.65052C5.73519 21.5 5.81069 21.4467 5.83901 21.3669L7.79618 15.8499H16.2038L18.161 21.3669C18.1893 21.4467 18.2648 21.5 18.3495 21.5H19.8174C19.9551 21.5 20.0516 21.3641 20.0062 21.234L13.4218 2.38405ZM15.6007 14.1499L12 4L8.39926 14.1499H15.6007Z"
    />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'AlphabetAThin';
