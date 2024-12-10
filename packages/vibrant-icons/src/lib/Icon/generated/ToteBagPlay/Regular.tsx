import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m9.5 10.8.2 6.7 6.05-3.25z" />
      <Svg.Path
        fillRule="evenodd"
        d="M22.57 6.841a.5.5 0 0 0-.498-.54H16.6V5.274q0-.058-.002-.115A4.48 4.48 0 0 0 12.125.8h-.25A4.48 4.48 0 0 0 7.4 5.275V6.3H1.927a.5.5 0 0 0-.498.541l1.196 14.55a.5.5 0 0 0 .499.459h17.752a.5.5 0 0 0 .498-.459zM4.69 19.65 3.773 8.5h16.454l-.917 11.15zM9.6 5.273v-.056A2.276 2.276 0 0 1 11.874 3h.25A2.276 2.276 0 0 1 14.4 5.272V6.3H9.6z"
        clipRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ToteBagPlayRegular';
