import { Box } from '@vibrant-ui/core';
import { withSpaceVariation } from './SpaceProps';

export const Space = withSpaceVariation(props => <Box flexShrink={0} {...props} />);
