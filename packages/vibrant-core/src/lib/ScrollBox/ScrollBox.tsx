import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { transformResponsiveValue } from '../transformResponsiveValue';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

const SystemScrollBox = styled(
  forwardRef<any, ScrollBoxProps>(({ as = 'div', ...restProps }, ref) =>
    createElement(as, {
      ref,
      ...restProps,
    })
  ),
  {
    shouldForwardProp,
  }
)(interpolation);

export const ScrollBox = forwardRef<any, ScrollBoxProps>(
  ({ keyboardShouldPersistTaps: _, scrollEnabled, ...restProps }, ref) => (
    <SystemScrollBox
      ref={ref}
      {...restProps}
      overflow={transformResponsiveValue(scrollEnabled, value => (value ? 'auto' : 'hidden'))}
    />
  )
);

ScrollBox.displayName = 'ScrollBox';
