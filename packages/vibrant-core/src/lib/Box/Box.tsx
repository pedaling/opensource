import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { useLayoutEvent } from '@vibrant-ui/utils';
import type { BoxElements, BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ as, base, onLayout, ...restProps }, ref) => {
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
      return <Component ref={composeRef} {...(as ? { as } : {})} {...restProps} />;
    }

    return createElement(as ?? 'div', {
      ref: composeRef,
      ...restProps,
    });
  }),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
>(
  props: BoxProps<BaseComponent, ElementName>
) => ReactElement;

(Box as FC).displayName = 'Box';
