import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 8.25V5h-15v3.25h15Zm0 10.75v-3.25h-15V19h15Zm2.25-8.25H2.25A.25.25 0 0 1 2 10.5V2.75a.25.25 0 0 1 .25-.25h19.5a.25.25 0 0 1 .25.25v7.75a.25.25 0 0 1-.25.25Zm0 10.75H2.25a.25.25 0 0 1-.25-.25V13.5a.25.25 0 0 1 .25-.25h19.5a.25.25 0 0 1 .25.25v7.75a.25.25 0 0 1-.25.25Z"
    />
  </Svg>
);

Regular.iconType = 'Regular';
