import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'paperplane-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="m10.273 11.496 2.586-1.437a.2.2 0 0 0 .078-.272l-.874-1.574a.2.2 0 0 0-.272-.077L9.244 9.55 5.662 5.2h13.452l-7.307 12.179zm.972 11.096a.2.2 0 0 1-.365-.052L8 11.5 1.27 3.327A.2.2 0 0 1 1.423 3h21.223a.2.2 0 0 1 .171.303z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PaperPlaneRegular';
