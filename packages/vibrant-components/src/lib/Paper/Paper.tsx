import { Box } from '@vibrant-ui/core';
import { withPaperVariation } from './PaperProps';

export const Paper = withPaperVariation(({ innerRef, overflow, ...restProps }) => (
  <Box ref={innerRef} overflow={overflow ?? 'hidden'} {...restProps} />
));
