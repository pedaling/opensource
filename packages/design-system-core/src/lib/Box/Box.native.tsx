import type { ComponentType, FC } from 'react';
import { forwardRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from '@emotion/native';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp, interpolation } from './BoxProps';

const transformAs = (as: keyof JSX.IntrinsicElements) => {
  switch (as) {
    case 'button':
      return TouchableOpacity;
    case 'input':
      return TextInput;
    case 'span':
    case 'a':
    case 'p':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
      return Text;
    default:
      return View;
  }
};

export const Box: FC<BoxProps> = styled(
  forwardRef<HTMLElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = base ? (base as unknown as ComponentType<any>) : transformAs(as ?? 'div');

    return <Component ref={ref} {...restProps} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);
