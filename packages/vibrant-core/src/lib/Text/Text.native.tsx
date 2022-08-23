import type { FC } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = styled(
  ({ style, ...restProps }: { style?: any }) => {
    const { props, ...restStyle } = StyleSheet.flatten(style);

    return <RNText style={restStyle} {...restProps} {...props} />;
  },
  {
    shouldForwardProp,
  }
)(interpolation);

Text.displayName = 'Text';
