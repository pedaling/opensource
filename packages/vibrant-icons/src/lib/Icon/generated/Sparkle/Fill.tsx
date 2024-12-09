import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'sparkle-fill', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M5.277 2.748c.2.983 1.468 2.413 2.23 2.7.13.05.243.164.243.302s-.114.253-.243.301c-.762.288-2.03 1.718-2.23 2.701C5.249 8.888 5.138 9 5 9s-.25-.112-.277-.248c-.2-.983-1.468-2.413-2.23-2.7-.13-.05-.243-.164-.243-.302s.114-.253.243-.301c.762-.288 2.03-1.718 2.23-2.701.028-.136.139-.248.277-.248s.25.112.277.248M5.261 14.75c.165 1.86 2.125 3.54 3.49 3.732.137.019.249.13.249.268s-.112.249-.249.268c-1.365.192-3.325 1.872-3.49 3.732A.27.27 0 0 1 5 23a.27.27 0 0 1-.261-.25c-.165-1.86-2.125-3.54-3.49-3.732C1.112 19 1 18.888 1 18.75s.112-.249.249-.268c1.365-.192 3.325-1.872 3.49-3.732A.27.27 0 0 1 5 14.5c.138 0 .249.112.261.25M15.004 1.25c.158 4.872 4.894 9.756 8.247 9.991.138.01.249.12.249.259v.534c0 .124-.09.228-.212.252-3.355.644-8.125 5.09-8.284 9.964a.257.257 0 0 1-.254.25h-.5a.257.257 0 0 1-.254-.25c-.16-4.874-4.93-9.32-8.284-9.964a.26.26 0 0 1-.212-.252V11.5c0-.138.111-.25.249-.259 3.353-.235 8.089-5.12 8.247-9.991A.256.256 0 0 1 14.25 1h.5c.138 0 .25.112.254.25" />
  </Svg>
);

export const Fill: IconComponent<IconProps, 'Fill'> = Object.assign(memo(Icon), {
  iconType: 'Fill' as const,
});
Fill.displayName = 'SparkleFill';
