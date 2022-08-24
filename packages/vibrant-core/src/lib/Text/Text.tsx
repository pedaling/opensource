import type { FC } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = styled(
  forwardRef<unknown, TextProps>(({ as = 'span', ...restProps }, ref) =>
    createElement(as, {
      ref,
      ...restProps,
    })
  ),
  {
    shouldForwardProp,
  }
)(interpolation);

(Text as FC).displayName = 'Text';
