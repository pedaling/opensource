import type { ComponentType, ReactElement } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { interpolation } from '../interpolation';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLDivElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = (base as ComponentType) ?? as ?? 'div';

    return <Component ref={ref} {...restProps} />;
  }),
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
