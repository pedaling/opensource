import type { FC, ReactElement } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import type { TextElements, TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text = styled(
  forwardRef<HTMLSpanElement, TextProps>(({ as = 'span', ...restProps }, ref) =>
    createElement(as, {
      ref,
      ...restProps,
    })
  ),
  {
    shouldForwardProp,
  }
)(interpolation) as <ElementName extends TextElements | undefined = undefined>(
  props: TextProps<ElementName>
) => ReactElement;

(Text as FC).displayName = 'Text';
