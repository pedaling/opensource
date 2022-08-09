import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import styled from '@emotion/native';
import type { BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

const transformAs = (as: keyof JSX.IntrinsicElements): ComponentType => {
  switch (as) {
    case 'button':
      return TouchableOpacity;
    case 'input':
      return TextInput;
    default:
      return View;
  }
};

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps & { style: any }>(({ as, base, style, ...restProps }, ref) => {
    const { BaseComponent, props, ...restStyle } = StyleSheet.flatten(style);

    const Component = BaseComponent ?? base ?? transformAs(as ?? 'div');

    return <Component ref={ref} style={restStyle} {...(base ? { as } : {})} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

Box.displayName = 'Box';
