import type { ComponentType } from 'react';
import type { TextProps as RNTextProps } from 'react-native';
import { Text as RNText, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text = styled<ComponentType<RNTextProps>>(
  ({ style, ...restProps }) => {
    const { props, ...restStyle } = StyleSheet.flatten(style) as any;

    return <RNText style={restStyle} {...restProps} {...props} />;
  },
  {
    shouldForwardProp,
  }
)(interpolation);

Text.displayName = 'Text';
