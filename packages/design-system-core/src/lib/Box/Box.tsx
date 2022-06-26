import type { ComponentType, ReactElement } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp, interpolation } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps<ComponentType<unknown>, 'div', JSX.IntrinsicElements['div']>>(
    ({ as, base, ...restProps }, ref) => {
      const Component = base ?? as ?? 'div';

      return <Component ref={ref} {...restProps} />;
    }
  ),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType,
  ElementName extends keyof JSX.IntrinsicElements,
  ElementProps extends JSX.IntrinsicElements[ElementName]
>(
  props: BoxProps<BaseComponent, ElementName, ElementProps>
) => ReactElement;
