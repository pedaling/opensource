import { Box } from '@vibrant-ui/core';
import { withPaperVariation } from './PaperProps';

export const Paper = withPaperVariation(({ innerRef, overflow, testId = 'paper', ...restProps }) => (
  <Box ref={innerRef} overflow={overflow ?? 'hidden'} data-testId={testId} {...restProps} />
));
