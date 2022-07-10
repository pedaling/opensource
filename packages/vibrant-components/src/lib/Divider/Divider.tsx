import { Box } from '@vibrant-ui/core';
import { withDividerVariation } from './DividerProps';

export const Divider = withDividerVariation(({ ...props }) => <Box flex="none" {...props} />);
