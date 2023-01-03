import { Box, isNative } from '@vibrant-ui/core';
import { withRatioVariation } from './RatioProps';

export const Ratio = withRatioVariation(({ aspectRatio, children, paddingBottom, width, ...props }) => {
  if (isNative || (typeof CSS !== 'undefined' && CSS.supports(`aspect-ratio: ${aspectRatio}`)))
    return (
      <Box width={width} aspectRatio={aspectRatio} {...props}>
        {children}
      </Box>
    );

  return (
    <Box width={width} {...props}>
      <Box position="relative" width="100%" height={0} pb={paddingBottom}>
        <Box position="absolute" top={0} left={0} bottom={0} right={0}>
          {children}
        </Box>
      </Box>
    </Box>
  );
});
