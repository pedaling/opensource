import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m9.5 10.8.2 6.7 6.05-3.25z" />
      <Svg.Path
        clipRule="evenodd"
        d="m22.5707 6.84102c.024-.29132-.206-.54097-.4983-.54097h-5.4727v-1.02501c0-.03858-.0005-.07705-.0015-.11541-.0614-2.41438-2.0446-4.359581-4.4735-4.359581h-.25c-2.42275 0-4.40205 1.935371-4.47301 4.341271-.00131.04442-.00197.089-.00197.13372v1.02501h-5.47268c-.29231 0-.52228.24966-.49832.54098l1.19675 14.54997c.02133.2594.23806.459.49832.459h17.75231c.2603 0 .477-.1996.4983-.459zm-17.881 12.80898-.9171-11.14996h16.4543l-.9167 11.14996zm4.91002-14.37705c.00002-.01887.00027-.03768.00075-.05644.01034-.40763.12841-.78894.32675-1.11647.39898-.6588 1.12258-1.09999 1.94748-1.09999h.25c.8249 0 1.5485.44119 1.9475 1.09999.1936.31965.3107.69053.3258 1.0871.0011.02848.0017.05708.0017.08581v1.0271h-4.79998z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'ToteBagPlayRegular';
