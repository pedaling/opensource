import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'school-thin',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M12 11.75C13.2426 11.75 14.25 10.7426 14.25 9.5C14.25 8.25736 13.2426 7.25 12 7.25C10.7574 7.25 9.75 8.25736 9.75 9.5C9.75 10.7426 10.7574 11.75 12 11.75Z" />
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 9.5H22.25C22.5261 9.5 22.75 9.72386 22.75 10V21.3504C22.75 21.6265 22.5261 21.8504 22.25 21.8504H1.75C1.47386 21.8504 1.25 21.6265 1.25 21.3504V10C1.25 9.72386 1.47386 9.5 1.75 9.5H5.5V5.42979C5.5 5.25616 5.59008 5.09496 5.73795 5.00396L11.7379 1.31165C11.8986 1.21276 12.1012 1.21276 12.262 1.31165L18.262 5.00396C18.4099 5.09496 18.5 5.25616 18.5 5.42979V9.5ZM21.05 11.2V20.1504H2.95V11.2H7.2V6.10034L11.9999 3.1465L16.8 6.10035V11.2H21.05Z"
    />
  </Svg>
);

Thin.iconType = 'Thin';
