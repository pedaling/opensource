import type { FC } from 'react';
import { createElement, forwardRef } from 'react';
import { convertStyleToClassName } from '../convertStyleToClassName';
import { nl2br } from '../nl2br';
import type { TextProps } from './TextProps';
import { interpolation, shouldForwardProp } from './TextProps';

export const Text: FC<TextProps> = forwardRef<unknown, TextProps>(({ as = 'span', children, ...restProps }, ref) => {
  const className = convertStyleToClassName(interpolation(restProps)).join(' ');

  const domAttributeProps = Object.fromEntries(Object.entries(restProps).filter(([key, _]) => shouldForwardProp(key)));

  return createElement(as, {
    ref,
    children: typeof children === 'string' ? nl2br(children) : children,
    domAttributeProps,
    className,
  });
});
(Text as FC).displayName = 'Text';
