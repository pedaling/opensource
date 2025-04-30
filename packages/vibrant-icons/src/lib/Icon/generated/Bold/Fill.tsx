import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'bold-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      d="M11.946 2.75H5.25v18.5h8.1c1.78 0 2.937-.416 4.141-1.286 1.285-.928 2.078-2.413 1.957-4.45-.054-.909-.423-1.933-.989-2.562-.579-.643-1.615-1.256-2.866-1.523a6.2 6.2 0 0 0 1.53-1.012c.752-.688 1.327-1.625 1.327-2.817 0-1.455-.692-2.713-1.881-3.573-1.165-.841-2.762-1.277-4.623-1.277m-4.496 8v-5.8h4.495c1.546 0 2.484.306 3.17.802.67.485 1.057 1.164 1.057 1.848 0 .543-.114.976-.318 1.334s-.508.654-.91.91c-.856.544-2.105.906-3.894.906zm0 8.3v-6.1h3.6c2.345 0 3.68.186 4.595.722.445.261.766.542.976.853.208.308.316.657.316 1.07 0 .689-.118 1.186-.294 1.567-.176.38-.418.658-.689.9-.657.588-1.845.988-2.79.988z"
      clipRule="evenodd"
    />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'BoldFill';
