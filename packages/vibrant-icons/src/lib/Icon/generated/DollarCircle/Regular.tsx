import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'dollarcircle',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.G clipPath="url(#clip0_19624_8091)">
      <Svg.Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.899902 12C0.899902 18.12 5.8799 23.1 11.9999 23.1C18.1199 23.1 23.0999 18.12 23.0999 12C23.0999 5.88002 18.1199 0.900024 11.9999 0.900024C5.8799 0.900024 0.899902 5.88002 0.899902 12ZM3.0999 12C3.0999 7.09502 7.0899 3.10002 11.9999 3.10002C16.9099 3.10002 20.8999 7.09002 20.8999 12C20.8999 16.91 16.9099 20.9 11.9999 20.9C7.0899 20.9 3.0999 16.905 3.0999 12ZM11.0749 18.295V18.3L11.0699 18.295H11.0749ZM11.0749 18.295H12.9199V16.7C14.7749 16.435 15.8849 15.325 15.8849 13.72C15.8849 12.255 14.9949 11.43 12.9999 11.045L12.0599 10.865C11.0699 10.68 10.6849 10.43 10.6849 9.97001C10.6849 9.44501 11.1599 9.10501 11.9749 9.10501C12.7899 9.10501 13.3599 9.47001 13.4249 10.035L13.4349 10.15H15.6999L15.6899 9.96501C15.6199 8.50001 14.6099 7.51001 12.9199 7.25001V5.69501H11.0699V7.25001C9.34985 7.54001 8.27985 8.64001 8.27985 10.135C8.27985 11.55 9.25485 12.48 11.0949 12.82L12.0349 13C13.1099 13.21 13.4749 13.445 13.4749 13.93C13.4749 14.485 12.8999 14.845 12.0249 14.845C11.1499 14.845 10.4899 14.47 10.3799 13.91L10.3599 13.8H8.09985L8.10985 13.965C8.19985 15.47 9.27985 16.47 11.0749 16.715V18.295Z"
      />
    </Svg.G>
    <Svg.Defs>
      <Svg.ClipPath id="clip0_19624_8091">
        <rect width={24} height={24} />
      </Svg.ClipPath>
    </Svg.Defs>
  </Svg>
);

Regular.iconType = 'Regular';
