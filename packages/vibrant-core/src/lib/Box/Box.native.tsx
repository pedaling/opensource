import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from '@emotion/native';
import { createInterpolation } from '../createInterpolation';
import { systemProps } from '../props';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp } from './BoxProps';

const transformAs = (as: keyof JSX.IntrinsicElements): ComponentType => {
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
    case 'br':
      return (props: any) => <Text {...props}>{'\n'}</Text>;
    default:
      return View;
  }
};

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ as, base, style, ...restProps }, ref) => {
    const { BaseComponent, props, ...restStyle } = StyleSheet.flatten(style) as any;

    const Component = BaseComponent ?? base ?? transformAs(as ?? 'div');

    return <Component ref={ref} style={restStyle} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(createInterpolation(systemProps));
