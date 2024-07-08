import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'school-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G>
      <Svg.Path d="m12 11.75c1.2426 0 2.25-1.0074 2.25-2.25 0-1.24264-1.0074-2.25-2.25-2.25s-2.25 1.00736-2.25 2.25c0 1.2426 1.0074 2.25 2.25 2.25z" />
      <Svg.Path
        clipRule="evenodd"
        d="m18.5 9.5h3.75c.2761 0 .5.22386.5.5v11.3504c0 .2761-.2239.5-.5.5h-20.5c-.27614 0-.5-.2239-.5-.5v-11.3504c0-.27614.22386-.5.5-.5h3.75v-4.07021c0-.17363.09008-.33483.23795-.42583l5.99995-3.69231c.1607-.09889.3633-.09889.5241 0l6 3.69231c.1479.091.238.2522.238.42583zm2.55 1.7v8.9504h-18.1v-8.9504h4.25v-5.09966l4.7999-2.95384 4.8001 2.95385v5.09965z"
        fillRule="evenodd"
      />
    </Svg.G>
  </Svg>
);

Thin.iconType = 'Thin';
