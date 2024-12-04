import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'totebagplay-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m15.5001 13.9999-5.70001-3 .20001 6z" />
      <Svg.Path
        clipRule="evenodd"
        d="m22.2681 6.6499h-5.9177v-1.275c0-.03643-.0004-.07275-.0013-.10896-.058-2.27936-1.9306-4.11604-4.2237-4.11604h-.25c-2.29368 0-4.16663 1.83771-4.22363 4.11796-.00089.03557-.00133.07125-.00133.10704v1.275h-5.91771c-.29824 0-.53016.25942-.49688.5558l1.5947 14.2c.02841.2529.24233.4442.49688.4442h17.34597c.2546 0 .4685-.1913.4969-.4442l1.5947-14.2c.0333-.29638-.1986-.5558-.4969-.5558zm-1.3423 1.7-1.3251 11.8h-15.20049l-1.32518-11.8zm-11.57536-2.975c0-.02173.00027-.0434.00082-.065.00311-.12234.01495-.24254.03493-.36.20259-1.19079 1.24151-2.1 2.48921-2.1h.25c1.2477 0 2.2867.90921 2.4893 2.1.0184.10834.0299.21901.034.33154.0012.03101.0017.06217.0017.09346v1.275h-5.29996z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'ToteBagPlayThin';
