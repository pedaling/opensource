import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef, memo } from 'react';
import { useComposedRef, useLayoutEvent } from '@vibrant-ui/utils';
import { convertStyleToClassName } from '../convertStyleToClassName';
import { OnColorContainer } from '../OnColorContainer';
import type { BoxElements, BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

export const Box = memo(
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
      const { ref: layoutEventRef } = useLayoutEvent(onLayout);
      const composeRef = useComposedRef(ref, layoutEventRef);

      const className = convertStyleToClassName(interpolation({ ...restProps, backgroundColor })).join(' ');

      const domAttributeProps = Object.fromEntries(
        Object.entries(restProps).filter(([key, _]) => shouldForwardProp(key))
      );

      const element = createElement(base ?? as ?? 'div', {
        ref: composeRef,
        ...(base && as ? { as } : {}),
        'aria-label': ariaLabel,
        'aria-checked': ariaChecked,
        'aria-labelledby': ariaLabelledBy,
        'aria-current': ariaCurrent,
        'aria-selected': ariaSelected,
        ...domAttributeProps,
        className,
      });

      if (backgroundColor) {
        return <OnColorContainer backgroundColor={backgroundColor}>{element}</OnColorContainer>;
      }

      return element;
    }
  )
) as <
  BaseComponent extends ComponentType<any> | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
>(
  props: BoxProps<BaseComponent, ElementName>
) => ReactElement;

(Box as FC).displayName = 'Box';
