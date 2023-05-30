import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import styled from '@emotion/native';
import { isDefined } from '@vibrant-ui/utils';
import { getElementPosition } from '../getElementPosition';
import { OnColorContainer } from '../OnColorContainer';
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
  forwardRef<HTMLDivElement, BoxProps & { style: any }>(
    (
      {
        as,
        base,
        style,
        onLayout,
        backgroundColor,
        id,
        role,
        ariaLabel,
        ariaLabelledBy,
        ariaChecked,
        ariaSelected,
        ariaCurrent: _ariaCurrent,
        ...restProps
      },
      ref
    ) => {
      const { BaseComponent, props, ...restStyle } = StyleSheet.flatten(style);

      const Component = BaseComponent ?? base ?? transformAs(as ?? 'div');

      const handleLayout = onLayout
        ? async (event: LayoutChangeEvent) => {
            const layout = await getElementPosition(event.currentTarget);

            onLayout(layout);
          }
        : undefined;

      return (
        <OnColorContainer backgroundColor={backgroundColor}>
          <Component
            ref={ref}
            style={restStyle}
            onLayout={handleLayout}
            nativeID={id}
            accessibilityRole={role}
            accessibilityLabel={ariaLabel}
            accessibilityLabelledBy={ariaLabelledBy}
            {...(isDefined(ariaChecked) || isDefined(ariaSelected)
              ? { accessibilityState: { checked: ariaChecked, selected: ariaSelected } }
              : {})}
            collapsable={ref ? false : undefined}
            {...(base ? { as } : {})}
            {...restProps}
            {...props}
          />
        </OnColorContainer>
      );
    }
  ),
  {
    shouldForwardProp,
  }
)(interpolation);

Box.displayName = 'Box';
