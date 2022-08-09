import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import type { BoxElements, BoxProps } from './BoxProps';
import { interpolation, shouldForwardProp } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = base ? (base as ComponentType<any>) : undefined;

    if (Component) {
      return <Component ref={ref} {...(as ? { as } : {})} {...restProps} />;
    }

    return createElement(as ?? 'div', {
      ref,
      ...restProps,
    });
  }),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType<any> | undefined = undefined,
  ElementName extends BoxElements | undefined = undefined
>(
  props: BoxProps<BaseComponent, ElementName>
) => ReactElement;

(Box as FC).displayName = 'Box';
