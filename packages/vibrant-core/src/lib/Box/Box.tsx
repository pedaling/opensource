import type { ComponentType, ReactElement } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { createInterpolation } from '../createInterpolation';
import { systemProps } from '../props';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp } from './BoxProps';

const interpolation = createInterpolation(systemProps, { display: 'flex' });

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = (base as ComponentType) ?? as ?? 'div';

    return <Component ref={ref} {...restProps} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation) as <
  BaseComponent extends ComponentType | unknown,
  ElementName extends keyof JSX.IntrinsicElements,
  ElementProps extends JSX.IntrinsicElements[ElementName]
>(
  props: BoxProps<BaseComponent, ElementName, ElementProps>
) => ReactElement;
