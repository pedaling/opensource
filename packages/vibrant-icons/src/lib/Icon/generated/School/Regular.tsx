import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'school-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m12 11.75c1.3117 0 2.375-1.0633 2.375-2.375 0-1.31168-1.0633-2.375-2.375-2.375s-2.375 1.06332-2.375 2.375c0 1.3117 1.0633 2.375 2.375 2.375z" />
      <Svg.Path
        clipRule="evenodd"
        d="m5.25 9.15039v-3.7151c0-.1766.09316-.34011.2451-.43014l6.2499-3.70371c.1572-.09314.3526-.09314.5098 0l6.2501 3.70371c.1519.09003.2451.25354.2451.43014v3.7151h3.5999c.2761 0 .5.22386.5.5v11.70001c0 .2761-.2239.5-.5.5h-20.7c-.27614 0-.5-.2239-.5-.5v-11.70001c0-.27614.22386-.5.5-.5zm2.2-2.74644 4.5499-2.69629 4.5501 2.69631v4.94643h4.0999v8.3h-17.3v-8.3h4.1001z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

Regular.iconType = 'Regular';
