import { Children, Fragment, isValidElement } from 'react';
import { Box } from '@vibrant-ui/core';
import { withStackVariation } from './StackProps';

export const Stack = withStackVariation(({ spacing, spaceWidth, spaceHeight, children, ...restProps }) => {
  const validChildren = Children.toArray(children).filter(child => isValidElement(child));

  return (
    <Box display="flex" {...restProps}>
      {spacing
        ? validChildren.map((child, index, { length: childLength }) => (
            <Fragment key={index}>
              {child}
              {childLength !== index + 1 && <Box flexGrow={0} flexShrink={0} width={spaceWidth} height={spaceHeight} />}
            </Fragment>
          ))
        : children}
    </Box>
  );
});
