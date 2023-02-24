import type { FC } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { nl2br } from '../nl2br';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = styled(
  forwardRef<unknown, TextProps>(({ as = 'span', children, ...restProps }, ref) =>
    createElement(as, {
      ref,
      children: typeof children === 'string' ? nl2br(children) : children,
      ...restProps,
    })
  ),
  {
    shouldForwardProp,
  }
)(interpolation);

(Text as FC).displayName = 'Text';
