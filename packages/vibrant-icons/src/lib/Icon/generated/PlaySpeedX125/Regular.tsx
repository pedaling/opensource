import type { FC } from 'react';
import { memo } from 'react';
import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';
const Icon: FC<IconProps> = ({ size = 24, fill = 'onColor', testId = 'playspeedx125-regular', ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="m13.765 5.75 2.16-2.165a.257.257 0 0 0 0-.355l-1.41-1.41a.257.257 0 0 0-.355 0L12 3.985 9.84 1.82a.257.257 0 0 0-.355 0l-1.41 1.41a.257.257 0 0 0 0 .355l2.16 2.165-2.16 2.165a.257.257 0 0 0 0 .355l1.41 1.41a.257.257 0 0 0 .355 0L12 7.515l2.16 2.165a.257.257 0 0 0 .355 0l1.41-1.41a.257.257 0 0 0 0-.355zM16.865 19.25h1.815c.085 0 .15.055.185.13.17.37.545.65 1.05.65.645 0 1.105-.47 1.105-1.135v-.01c0-.67-.465-1.12-1.11-1.12-.27 0-.5.08-.685.205q-.201.144-.32.34c-.04.06-.1.1-.17.1h-1.75a.1.1 0 0 1-.1-.105l.3-4.91c0-.055.045-.095.1-.095h5.28a.1.1 0 0 1 .1.1v1.675a.1.1 0 0 1-.1.1H18.98l-.12 1.92h.045c.285-.57.915-.96 1.74-.96 1.46 0 2.52 1.13 2.52 2.7v.01c0 1.84-1.31 3.06-3.245 3.06s-3.025-1.14-3.155-2.545a.104.104 0 0 1 .105-.11zM9.595 20.145c0-.055.025-.11.065-.15l2.695-2.425c.955-.855 1.125-1.225 1.125-1.695v-.01c0-.52-.375-.89-.91-.89-.59 0-.945.39-1.015.955a.097.097 0 0 1-.095.09H9.565a.11.11 0 0 1-.105-.105c.05-1.66 1.305-2.77 3.11-2.77s3.11 1.02 3.11 2.57v.01c0 1.13-.5 1.765-1.755 2.86l-1.415 1.24v.045h3.16a.1.1 0 0 1 .1.1v1.675a.1.1 0 0 1-.1.1H9.69a.1.1 0 0 1-.1-.1V20.14zM6.275 20.76c0-.61.485-1.095 1.095-1.095s1.1.485 1.1 1.095-.485 1.1-1.1 1.1a1.086 1.086 0 0 1-1.095-1.1M2.79 15.42h-.045l-1.91 1.37v-2.08l1.955-1.42h2.285v8.455H2.79v-6.33z" />
  </Svg>
);

export const Regular: IconComponent<IconProps, 'Regular'> = Object.assign(memo(Icon), {
  iconType: 'Regular' as const,
});
Regular.displayName = 'PlaySpeedX125Regular';
