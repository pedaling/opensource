import { forwardRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = styled(
  forwardRef<any, ScrollBoxProps & { style: any }>(({ style, overflowX, ...restProps }, ref) => {
    const { props, ...restStyle } = StyleSheet.flatten(style);

    return (
      <ScrollView
        ref={ref}
        style={restStyle}
        horizontal={overflowX === 'auto'}
        contentContainerStyle={{
          flexGrow: 1,
        }}
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
