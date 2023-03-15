import { Box, isNative } from '@vibrant-ui/core';
import { withRatioVariation } from './RatioProps';

export const Ratio = withRatioVariation(
  ({ innerRef, aspectRatio, children, paddingBottom, width = '100%', testId = 'ratio', ...props }) => {
    if (isNative) {
      return (
        <Box ref={innerRef} width={width} aspectRatio={aspectRatio} {...props}>
          {children}
        </Box>
      );
    }

    return (
      <Box ref={innerRef} width={width} data-testid={testId} {...props}>
        <Box position="relative" width="100%" height={0} pb={paddingBottom}>
          <Box position="absolute" top={0} left={0} bottom={0} right={0}>
            {children}
          </Box>
        </Box>
      </Box>
    );
  }
);
