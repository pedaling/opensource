import type { ComponentType, FC } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import type { BoxProps } from './BoxProps';
import { shouldForwardProp, interpolation } from './BoxProps';

export const Box: FC<BoxProps> = styled(
  forwardRef<HTMLElement, BoxProps>(({ as, base, ...restProps }, ref) => {
    const Component = base ? (base as unknown as ComponentType<any>) : as ?? 'div';

    return <Component ref={ref} {...restProps} />;
  }),
  {
    shouldForwardProp,
  }
)(interpolation);
