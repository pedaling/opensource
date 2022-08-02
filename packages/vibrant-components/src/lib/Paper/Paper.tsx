import { Box } from '@vibrant-ui/core';
import { withPaperVariation } from './PaperProps';

export const Paper = withPaperVariation(({ innerRef, ...restProps }) => (
  <Box ref={innerRef} overflowX="hidden" overflowY="hidden" {...restProps} />
));
