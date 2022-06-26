import type { ComponentType, ReactElement } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp, interpolation } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps<unknown, 'div', JSX.IntrinsicElements['div']>>(
    ({ as, base, ...restProps }, ref) => {
      const Component = base ? (base as unknown as ComponentType<any>) : as ?? 'div';

      return <Component ref={ref} {...restProps} />;
    }
  ),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType,
  Element extends keyof JSX.IntrinsicElements,
  Props extends JSX.IntrinsicElements[Element]
>(
  props: BoxProps<BaseComponent, Element, Props>
) => ReactElement;
