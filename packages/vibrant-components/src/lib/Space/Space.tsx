import { Box } from '@vibrant-ui/core';
import { withSpaceVariation } from './SpaceProps';

export const Space = withSpaceVariation(props => <Box display="flex" {...props} />);
