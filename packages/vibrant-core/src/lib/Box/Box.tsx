import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { useComposedRef, useLayoutEvent } from '@vibrant-ui/utils';
import { OnColorContainer } from '../OnColorContainer';
import type { BoxElements, BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(
    (
      {
        as,
        base,
        onLayout,
        ariaLabel,
        ariaChecked,
        ariaLabelledBy,
        ariaCurrent,
        ariaSelected,
        backgroundColor,
        ...restProps
      },
      ref
    ) => {
      const Component = base ? (base as ComponentType<any>) : undefined;

      const { ref: layoutEventRef } = useLayoutEvent(onLayout);
      const composeRef = useComposedRef(ref, layoutEventRef);

      if (Component) {
        return (
          <OnColorContainer backgroundColor={backgroundColor}>
            <Component
              ref={composeRef}
              {...(as ? { as } : {})}
              aria-label={ariaLabel}
              aria-current={ariaCurrent}
              {...restProps}
            />
          </OnColorContainer>
        );
      }

      return (
        <OnColorContainer backgroundColor={backgroundColor}>
          {createElement(as ?? 'div', {
            ref: composeRef,
            'aria-label': ariaLabel,
            'aria-checked': ariaChecked,
            'aria-labelledby': ariaLabelledBy,
            'aria-current': ariaCurrent,
            'aria-selected': ariaSelected,
            ...restProps,
          })}
        </OnColorContainer>
      );
    }
  ),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType<any> | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
>(
  props: BoxProps<BaseComponent, ElementName>
) => ReactElement;

(Box as FC).displayName = 'Box';
