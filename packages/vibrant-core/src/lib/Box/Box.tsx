import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { useLayoutEvent } from '@vibrant-ui/utils';
import { OnColorContainer } from '../OnColorContainer';
import type { BoxElements, BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(
    (
      { as, base, onLayout, ariaLabel, ariaChecked, ariaLabelledBy, ariaCurrent, backgroundColor, ...restProps },
      ref
    ) => {
      const Component = base ? (base as ComponentType<any>) : undefined;

      const { ref: layoutEventRef } = useLayoutEvent(onLayout);

      const composeRef = useCallback(
        (node: HTMLDivElement) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(node);
            } else {
              ref.current = node;
            }
          }

          layoutEventRef(node);
        },
        [ref, layoutEventRef]
      );

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
