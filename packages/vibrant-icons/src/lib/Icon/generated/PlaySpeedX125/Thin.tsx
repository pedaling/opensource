import { Svg } from '@vibrant-ui/core';
import type { IconComponent, IconProps } from '../../IconProp';

export const Thin: IconComponent<IconProps, 'Thin'> = ({ size = 24, fill = 'onColor', testId, ...props }) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} fill={fill} data-testid={testId} {...props}>
    <Svg.Path d="M15.665 2.96998L14.78 2.08498C14.68 1.98498 14.525 1.98498 14.425 2.08498L12 4.50998L9.57497 2.08498C9.47497 1.98498 9.31997 1.98498 9.21997 2.08498L8.33497 2.96998C8.23497 3.06998 8.23497 3.22498 8.33497 3.32498L10.76 5.74998L8.33497 8.17498C8.23497 8.27498 8.23497 8.42998 8.33497 8.52998L9.21997 9.41498C9.31997 9.51498 9.47497 9.51498 9.57497 9.41498L12 6.98998L14.425 9.41498C14.525 9.51498 14.68 9.51498 14.78 9.41498L15.665 8.52998C15.765 8.42998 15.765 8.27498 15.665 8.17498L13.24 5.74998L15.665 3.32498C15.765 3.22498 15.765 3.06998 15.665 2.96998Z" />
    <Svg.Path d="M9.72997 20.37C9.72997 20.315 9.74997 20.265 9.78997 20.225L12.485 17.655C13.46 16.715 13.65 16.33 13.65 15.805V15.795C13.65 15.195 13.225 14.77 12.615 14.77C11.945 14.77 11.505 15.215 11.44 15.845C11.435 15.895 11.395 15.935 11.345 15.935L9.71997 15.945C9.66497 15.945 9.61497 15.895 9.61497 15.84C9.66497 14.24 10.89 13.145 12.605 13.145C14.32 13.145 15.56 14.17 15.56 15.67V15.68C15.56 16.76 15.08 17.41 13.79 18.62L12.27 20.025V20.095H15.565C15.62 20.095 15.665 20.14 15.665 20.195V21.645C15.665 21.7 15.62 21.745 15.565 21.745H9.82497C9.76997 21.745 9.72497 21.7 9.72497 21.645V20.365L9.72997 20.37Z" />
    <Svg.Path d="M16.78 19.305H18.32C18.41 19.305 18.48 19.365 18.51 19.445C18.68 19.905 19.12 20.245 19.715 20.245C20.46 20.245 20.985 19.7 20.985 18.92V18.91C20.985 18.135 20.455 17.605 19.715 17.605C19.385 17.605 19.1 17.705 18.88 17.88C18.75 17.98 18.64 18.1 18.56 18.23C18.525 18.29 18.46 18.33 18.39 18.33H16.895C16.835 18.33 16.79 18.28 16.795 18.225L17.115 13.385C17.115 13.33 17.16 13.29 17.215 13.29H22.26C22.315 13.29 22.36 13.335 22.36 13.39V14.84C22.36 14.895 22.315 14.94 22.26 14.94H18.68L18.525 17.08H18.565C18.87 16.51 19.51 16.14 20.32 16.14C21.785 16.14 22.85 17.285 22.85 18.865V18.875C22.85 20.68 21.575 21.895 19.715 21.895C17.955 21.895 16.815 20.79 16.675 19.41C16.67 19.35 16.72 19.3 16.78 19.3V19.305Z" />
    <Svg.Path d="M6.35497 20.76C6.35497 20.15 6.83997 19.665 7.44997 19.665C8.05997 19.665 8.54997 20.15 8.54997 20.76C8.54997 21.37 8.06497 21.86 7.44997 21.86C6.83497 21.86 6.35497 21.375 6.35497 20.76Z" />
    <Svg.Path d="M3.13497 15.18H3.09497L1.30497 16.48C1.23997 16.53 1.14497 16.48 1.14497 16.4V14.805C1.14497 14.775 1.15997 14.745 1.18497 14.725L3.06997 13.33C3.10497 13.305 3.14497 13.29 3.18997 13.29H4.99997C5.05497 13.29 5.09997 13.335 5.09997 13.39V21.645C5.09997 21.7 5.05497 21.745 4.99997 21.745H3.22997C3.17497 21.745 3.12997 21.7 3.12997 21.645V15.175L3.13497 15.18Z" />
  </Svg>
);

Thin.iconType = 'Thin';
