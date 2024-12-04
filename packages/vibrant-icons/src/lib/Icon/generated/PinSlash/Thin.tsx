import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'pinslash-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.77775 1.57566C2.68012 1.47803 2.52182 1.47803 2.42419 1.57566L1.57566 2.42419C1.47803 2.52182 1.47803 2.68012 1.57566 2.77775L21.2221 22.4242C21.3197 22.5218 21.478 22.5218 21.5757 22.4242L22.4242 21.5757C22.5218 21.478 22.5218 21.3197 22.4242 21.2221L17.702 16.5H20.75C20.9 16.5 21 16.4 21 16.25V16.15L17.5 9.64996C17.45 9.59996 17.45 9.49996 17.45 9.39996V2.24996C17.45 2.09996 17.35 1.99996 17.2 1.99996H6.84996C6.69996 1.99996 6.59996 2.09996 6.59996 2.24996V5.39788L2.77775 1.57566ZM8.29996 7.09788L15.902 14.7H18.15L15.85 10.4C15.7 10.1 15.6 9.69996 15.6 9.34996V3.74996H8.29996V7.09788Z"
    />
    <Svg.Path d="M3.04996 16.1L6.3566 9.95907L7.63092 11.2334L5.77671 14.7H11.0975L12.9 16.5024V21.7C12.9 21.7732 12.8732 21.8196 12.8392 21.8784C12.8268 21.9 12.8134 21.9232 12.8 21.95L12.2 22.9C12.15 22.95 12.05 23 12 23C11.95 23 11.85 23 11.8 22.9L11.2 21.95C11.15 21.9 11.1 21.8 11.1 21.7V16.5H3.24996C3.09996 16.5 2.99996 16.4 2.99996 16.25C2.99996 16.2 2.99996 16.15 3.04996 16.1Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'PinSlashThin';
