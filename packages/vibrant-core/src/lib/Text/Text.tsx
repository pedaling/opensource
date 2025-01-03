import type { FC } from 'react';
import { createElement, forwardRef } from 'react';
import { css } from '@emotion/css';
import { nl2br } from '../nl2br';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = forwardRef<unknown, TextProps>(({ as = 'span', children, ...restProps }, ref) => {
  const className = Object.entries(interpolation({ ...restProps } ?? {}))
    .map(([key, value]) => css({ [key]: value }))
    .join(' ');

  const domAttributeProps = Object.fromEntries(
    Object.entries({ ...restProps }).filter(([key, _]) => shouldForwardProp(key))
  );

  return createElement(as, {
    ref,
    children: typeof children === 'string' ? nl2br(children) : children,
    domAttributeProps,
    className,
  });
});
(Text as FC).displayName = 'Text';
