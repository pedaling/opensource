import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'volumemute-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.10103 5.89895L2.77775 1.57566C2.68012 1.47803 2.52182 1.47803 2.42419 1.57566L1.57566 2.42419C1.47803 2.52182 1.47803 2.68012 1.57566 2.77775L21.2221 22.4242C21.3197 22.5218 21.478 22.5218 21.5757 22.4242L22.4242 21.5757C22.5218 21.478 22.5218 21.3197 22.4242 21.2221L18.85 17.6479V1.89129C18.85 1.69276 18.6297 1.57344 18.4634 1.68189L11.9975 5.89895H7.10103ZM8.80103 7.59895L17.15 15.9479V4.56812L12.5029 7.59895H8.80103Z"
    />
    <Svg.Path d="M16.1288 19.7541C16.2611 19.8781 16.1734 20.1 15.9921 20.1H14.5864C14.5304 20.1 14.476 20.0812 14.432 20.0467L11.9519 18.0989H4.39999C4.26192 18.0989 4.14999 17.987 4.14999 17.8489V7.75206L5.84999 9.45206V16.3989H12.5485L16.1288 19.7541Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'VolumeMuteThin';
