import { forwardRef } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text = styled(
  forwardRef<HTMLSpanElement, TextProps & { style: any }>(({ as: _, style, ...restProps }, ref) => {
    const { props, ...restStyle } = StyleSheet.flatten(style);

    return <RNText ref={ref as any} style={restStyle} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

Text.displayName = 'Text';
