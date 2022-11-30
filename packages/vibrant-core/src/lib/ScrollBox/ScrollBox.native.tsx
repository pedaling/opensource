import { forwardRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = styled(
  forwardRef<any, ScrollBoxProps & { style: any }>(({ style, ...restProps }, ref) => {
    const { props, alignItems, justifyContent, ...restStyle } = StyleSheet.flatten(style);

    return (
      <ScrollView
        ref={ref}
        style={restStyle}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems,
          justifyContent,
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
