import type { FC } from 'react';
import { forwardRef } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { nl2br } from '../nl2br';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = styled(
  forwardRef<unknown, TextProps & { style?: any }>(({ style, children, ...restProps }, ref) => {
    const { props, visibility, ...restStyle } = StyleSheet.flatten(style);

    return (
      <RNText
        ref={ref}
        style={visibility === 'hidden' ? { opacity: 0 } : restStyle}
        children={typeof children === 'string' ? nl2br(children) : children}
        {...restProps}
        {...props}
      />
    );
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

Text.displayName = 'Text';
