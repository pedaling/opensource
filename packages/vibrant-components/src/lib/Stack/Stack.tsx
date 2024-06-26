import { Children, Fragment, isValidElement } from 'react';
import { Box } from '@vibrant-ui/core';
import { withStackVariation } from './StackProps';

export const Stack = withStackVariation(
  ({ BoxComponent, innerRef, spacing, spaceWidth, spaceHeight, children, scrollable, horizontal, ...restProps }) => {
    const validChildren = Children.toArray(children).filter(isValidElement);

    return (
      <BoxComponent display="flex" ref={innerRef} {...(scrollable ? { horizontal } : {})} {...restProps}>
        {spacing
          ? validChildren.map((child, index, { length: childLength }) => (
              <Fragment key={child.key}>
                {child}
                {childLength !== index + 1 && (
                  <Box as="span" flexGrow={0} flexShrink={0} width={spaceWidth} height={spaceHeight} />
                )}
              </Fragment>
            ))
          : children}
      </BoxComponent>
    );
  }
);
