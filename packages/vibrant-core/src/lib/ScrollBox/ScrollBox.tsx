import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { useComposedRef, useLayoutEvent } from '@vibrant-ui/utils';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

const SystemScrollBox = styled(
  forwardRef<any, ScrollBoxProps>(
    ({ as = 'div', ariaChecked, ariaCurrent, ariaLabel, ariaLabelledBy, ariaSelected, ...restProps }, ref) =>
      createElement(as, {
        ref,
        'aria-label': ariaLabel,
        'aria-checked': ariaChecked,
        'aria-labelledby': ariaLabelledBy,
        'aria-current': ariaCurrent,
        'aria-selected': ariaSelected,
        ...restProps,
      })
  ),
  {
    shouldForwardProp,
  }
)(interpolation);

export const ScrollBox = forwardRef<any, ScrollBoxProps>(
  ({ keyboardShouldPersistTaps: _, scrollEnabled = true, onLayout, ...restProps }, ref) => {
    const { ref: layoutEventRef } = useLayoutEvent(onLayout);
    const composeRef = useComposedRef(ref, layoutEventRef);

    return (
      <SystemScrollBox
        ref={composeRef}
        {...restProps}
        overflow={transformResponsiveValue(scrollEnabled, value => (value ? 'auto' : 'hidden'))}
      />
    );
  }
);

ScrollBox.displayName = 'ScrollBox';
