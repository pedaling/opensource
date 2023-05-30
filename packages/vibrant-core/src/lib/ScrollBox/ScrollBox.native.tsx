import { forwardRef } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { getElementPosition } from '../getElementPosition';
import { useResponsiveValue } from '../useResponsiveValue';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = styled(
  forwardRef<any, ScrollBoxProps & { style: any }>(({ style, onLayout, scrollEnabled = true, ...restProps }, ref) => {
    const { getResponsiveValue } = useResponsiveValue();
    const currentScrollEnabled = getResponsiveValue(scrollEnabled);

    const handleLayout = onLayout
      ? async (event: LayoutChangeEvent) => {
          const layout = await getElementPosition(event.currentTarget);

          onLayout(layout);
        }
      : undefined;

    const {
      props,
      alignItems,
      justifyContent,
      flexDirection,
      padding,
      paddingLeft,
      paddingRight,
      paddingBottom,
      paddingTop,
      paddingVertical,
      paddingHorizontal,
      ...restStyle
    } = StyleSheet.flatten(style);

    return (
      <ScrollView
        ref={ref}
        style={restStyle}
        onLayout={handleLayout}
        scrollEnabled={currentScrollEnabled}
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection,
          alignItems,
          justifyContent,
          padding,
          paddingLeft,
          paddingRight,
          paddingBottom,
          paddingTop,
          paddingVertical,
          paddingHorizontal,
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
