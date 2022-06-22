import type { ComponentType } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp, interpolations } from './BoxProps';

export const Box = styled(
  forwardRef<HTMLElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = base ? (base as unknown as ComponentType<any>) : as ?? 'div';

    return <Component ref={ref} {...restProps} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolations);
