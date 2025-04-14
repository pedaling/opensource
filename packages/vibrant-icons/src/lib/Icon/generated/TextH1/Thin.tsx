import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'texth1-thin', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.549 21V12.9249H3.9V21H2V3H3.9V11.0254H13.5495V3H15.4495V21H13.549Z" />
    <Svg.Path d="M20.0773 22.5501V16.7345L18.1003 17.9035V16.3726L19.9683 15.1001H21.7373V22.5506L20.0773 22.5501Z" />
  </Svg>
);

export const Thin: IconComponent<IconProps, 'Thin'> = Object.assign(memo(Icon), {
  iconType: 'Thin' as const,
});
Thin.displayName = 'TextH1Thin';
