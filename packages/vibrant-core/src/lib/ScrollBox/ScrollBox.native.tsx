import { forwardRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = styled(
  forwardRef<any, ScrollBoxProps & { style: any }>(({ style, overflowX, ...restProps }, ref) => {
    const { props, padding, paddingTop, paddingLeft, paddingRight, paddingBottom, ...restStyle } =
      StyleSheet.flatten(style);

    return (
      <ScrollView
        ref={ref}
        style={restStyle}
        contentContainerStyle={{
          padding,
          paddingTop,
          paddingLeft,
          paddingRight,
          paddingBottom,
        }}
        horizontal={overflowX === 'auto'}
        {...restProps}
        {...props}
      />
    );
  }),
  {
    shouldForwardProp,
  }
)(interpolation);

ScrollBox.displayName = 'ScrollBox';
