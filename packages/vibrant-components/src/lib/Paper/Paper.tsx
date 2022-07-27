import { Box } from '@vibrant-ui/core';
import { withPaperVariation } from './PaperProps';

export const Paper = withPaperVariation(({ ...restProps }) => (
  <Box overflowX="hidden" overflowY="hidden" {...restProps} />
));
