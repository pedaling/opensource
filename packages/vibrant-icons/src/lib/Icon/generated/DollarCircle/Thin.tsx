import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg data-testid={testId} viewBox="0 0 24 24" width={size} height={size} fill={fill} {...props}>
    <Svg.Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.1499 12C1.1499 17.985 6.0149 22.85 11.9999 22.85C17.9849 22.85 22.8499 17.985 22.8499 12C22.8499 6.01502 17.9849 1.15002 11.9999 1.15002C6.0149 1.15002 1.1499 6.01502 1.1499 12ZM2.8499 12C2.8499 6.95502 6.9549 2.85002 11.9999 2.85002C17.0449 2.85002 21.1499 6.95502 21.1499 12C21.1499 17.045 17.0449 21.15 11.9999 21.15C6.9549 21.15 2.8499 17.045 2.8499 12ZM11.2249 16.58V18.15H11.2349H12.7849V16.575L12.8699 16.565C14.6999 16.315 15.7499 15.285 15.7499 13.725C15.7499 12.325 14.9249 11.57 12.9899 11.195L12.0499 11.02C11.2749 10.875 10.5549 10.645 10.5549 9.97503C10.5549 9.36003 11.1099 8.96003 11.9949 8.96003C12.8799 8.96003 13.5049 9.36503 13.5899 10.005H15.5549V9.97503C15.4849 8.57003 14.5049 7.63003 12.8699 7.39003L12.7849 7.38003V5.84503H11.2349V7.38003L11.1499 7.39503C9.47989 7.66003 8.43989 8.70503 8.43989 10.135C8.43989 11.485 9.34489 12.34 11.1299 12.67L12.0699 12.85C13.0599 13.04 13.6299 13.28 13.6299 13.925C13.6299 14.57 12.9749 14.99 12.0299 14.99C11.0849 14.99 10.3699 14.57 10.2399 13.945H8.26489V13.955C8.34989 15.395 9.39489 16.345 11.1399 16.57L11.2249 16.58Z"
    />
  </Svg>
);

Thin.iconType = 'Thin';
