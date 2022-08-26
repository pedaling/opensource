import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import type { ScrollBoxProps } from './ScrollBoxProps';
import { interpolation, shouldForwardProp } from './ScrollBoxProps';

export const ScrollBox = styled(
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

ScrollBox.displayName = 'ScrollBox';
