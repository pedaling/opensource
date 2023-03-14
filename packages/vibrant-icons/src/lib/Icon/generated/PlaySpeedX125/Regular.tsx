import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Regular: IconComponent<IconProps, 'Regular'> = ({
  size = 24,
  fill = 'onColor',
  testId = 'playspeedx125-regular',
  ...props
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M13.765 5.74997L15.925 3.58497C16.02 3.48997 16.02 3.32997 15.925 3.22997L14.515 1.81997C14.42 1.72497 14.26 1.72497 14.16 1.81997L12 3.98497L9.84004 1.81997C9.74504 1.72497 9.58504 1.72497 9.48504 1.81997L8.07504 3.22997C7.98004 3.32497 7.98004 3.48497 8.07504 3.58497L10.235 5.74997L8.07504 7.91497C7.98004 8.00997 7.98004 8.16997 8.07504 8.26997L9.48504 9.67997C9.58004 9.77497 9.74004 9.77497 9.84004 9.67997L12 7.51497L14.16 9.67997C14.255 9.77497 14.415 9.77497 14.515 9.67997L15.925 8.26997C16.02 8.17497 16.02 8.01497 15.925 7.91497L13.765 5.74997Z" />
    <Svg.Path d="M16.865 19.25H18.68C18.765 19.25 18.83 19.305 18.865 19.38C19.035 19.75 19.41 20.03 19.915 20.03C20.56 20.03 21.02 19.56 21.02 18.895V18.885C21.02 18.215 20.555 17.765 19.91 17.765C19.64 17.765 19.41 17.845 19.225 17.97C19.09 18.065 18.985 18.18 18.905 18.31C18.865 18.37 18.805 18.41 18.735 18.41H16.985C16.925 18.41 16.88 18.36 16.885 18.305L17.185 13.395C17.185 13.34 17.23 13.3 17.285 13.3H22.565C22.62 13.3 22.665 13.345 22.665 13.4V15.075C22.665 15.13 22.62 15.175 22.565 15.175H18.98L18.86 17.095H18.905C19.19 16.525 19.82 16.135 20.645 16.135C22.105 16.135 23.165 17.265 23.165 18.835V18.845C23.165 20.685 21.855 21.905 19.92 21.905C17.985 21.905 16.895 20.765 16.765 19.36C16.76 19.3 16.81 19.25 16.87 19.25H16.865Z" />
    <Svg.Path d="M9.59504 20.145C9.59504 20.09 9.62004 20.035 9.66004 19.995L12.355 17.57C13.31 16.715 13.48 16.345 13.48 15.875V15.865C13.48 15.345 13.105 14.975 12.57 14.975C11.98 14.975 11.625 15.365 11.555 15.93C11.55 15.98 11.51 16.02 11.46 16.02H9.56504C9.51004 16.02 9.46004 15.97 9.46004 15.915C9.51004 14.255 10.765 13.145 12.57 13.145C14.375 13.145 15.68 14.165 15.68 15.715V15.725C15.68 16.855 15.18 17.49 13.925 18.585L12.51 19.825V19.87H15.67C15.725 19.87 15.77 19.915 15.77 19.97V21.645C15.77 21.7 15.725 21.745 15.67 21.745H9.69004C9.63504 21.745 9.59004 21.7 9.59004 21.645V20.14L9.59504 20.145Z" />
    <Svg.Path d="M6.27504 20.76C6.27504 20.15 6.76004 19.665 7.37004 19.665C7.98004 19.665 8.47004 20.15 8.47004 20.76C8.47004 21.37 7.98504 21.86 7.37004 21.86C6.75504 21.86 6.27504 21.375 6.27504 20.76Z" />
    <Svg.Path d="M2.79004 15.42H2.74504L0.835037 16.79V14.71L2.79004 13.29H5.07504V21.745H2.79004V15.415V15.42Z" />
  </Svg>
);

Regular.iconType = 'Regular';
