import type { FC } from 'react';
import { forwardRef } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = styled(
  forwardRef<unknown, TextProps & { style?: any }>(({ style, ...restProps }, ref) => {
    const { props, ...restStyle } = StyleSheet.flatten(style);

    return <RNText ref={ref} style={restStyle} {...restProps} {...props} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

Text.displayName = 'Text';
