import { Text } from '@vibrant-ui/core';
import { withDisplayVariation } from './DisplayProps';

export const Display = withDisplayVariation(props => <Text {...props} />);
