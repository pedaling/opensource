import type { ComponentType, FC, ReactElement } from 'react';
import { createElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { createInterpolation } from '../createInterpolation';
import { systemProps } from '../props';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp } from './BoxProps';

const interpolation = createInterpolation(systemProps, { display: 'flex' });

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
  BaseComponent extends ComponentType | undefined = undefined,
  ElementName extends keyof JSX.IntrinsicElements | undefined = undefined
>(
  props: BoxProps<BaseComponent, ElementName>
) => ReactElement;

(Box as FC).displayName = 'Box';
