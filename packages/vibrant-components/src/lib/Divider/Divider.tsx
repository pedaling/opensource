import { Box } from '@vibrant-ui/core';
import { withDividerVariation } from './DividerProps';

export const Divider = withDividerVariation(({ ...props }) => (
  <Box flexGrow={0} flexShrink={0} flexBasis="auto" borderWidth={0} {...props} />
));
