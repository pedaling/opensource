import { createElement, forwardRef } from 'react';
import { css } from '@emotion/css';
import { useComposedRef, useLayoutEvent } from '@vibrant-ui/utils';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = forwardRef<unknown, ScrollBoxProps>(
  (
    {
      as = 'div',
      ariaChecked,
      ariaCurrent,
      ariaLabel,
      ariaLabelledBy,
      ariaSelected,
      scrollEnabled = true,
      onLayout,
      ...restProps
    },
    ref
  ) => {
    const { ref: layoutEventRef } = useLayoutEvent(onLayout);
    const composeRef = useComposedRef(ref, layoutEventRef);

    const className = Object.entries(
      interpolation({
        ...restProps,
        overflow: transformResponsiveValue(scrollEnabled, value => (value ? 'auto' : 'hidden')),
      })
    )
      .map(([key, value]) => css({ [key]: value }))
      .join(' ');

    const domAttributeProps = Object.fromEntries(
      Object.entries({ ...restProps }).filter(([key, _]) => shouldForwardProp(key))
    );

    const element = createElement(as, {
      ref: composeRef,
      'aria-label': ariaLabel,
      'aria-checked': ariaChecked,
      'aria-labelledby': ariaLabelledBy,
      'aria-current': ariaCurrent,
      'aria-selected': ariaSelected,
      ...domAttributeProps,
      className,
    });

    return element;
  }
);

ScrollBox.displayName = 'ScrollBox';
