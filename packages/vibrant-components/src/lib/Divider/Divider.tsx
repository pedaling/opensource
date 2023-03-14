import { Box } from '@vibrant-ui/core';
import { withDividerVariation } from './DividerProps';

export const Divider = withDividerVariation(({ testId, ...props }) => (
  <Box data-testid={testId} flexGrow={0} flexShrink={0} flexBasis="auto" borderWidth={0} {...props} />
));
